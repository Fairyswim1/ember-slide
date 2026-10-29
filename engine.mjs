export const DIRS=['left','up','right','down'];
export const tile=(k,v)=>({k,v});
export const fmt=t=>!t?'빈칸':t==='#'?'고정 벽':t.k==='n'?String(t.v).replace('-','−'):(t.v===1?'x':t.v===-1?'−x':String(t.v).replace('-','−')+'x');
export const key=b=>b.map(t=>t==='#'?'#':t?t.k+t.v:'.').join(',');
export const totals=b=>b.reduce((a,t)=>{if(t&&t!=='#')a[t.k]+=t.v;return a;},{x:0,n:0});
export function slide(board,dir){
 if(!DIRS.includes(dir))throw Error('Unknown direction');const next=board.map(t=>t&&t!=='#'?{...t}:t),merges=[];
 for(let line=0;line<4;line++){
  const ids=Array.from({length:4},(_,i)=>dir==='left'?line*4+i:dir==='right'?line*4+3-i:dir==='up'?i*4+line:(3-i)*4+line);
  let segment=[];const flush=()=>{const values=segment.map(i=>board[i]).filter(Boolean),out=[];for(let j=0;j<values.length;j++){const a=values[j],b=values[j+1];if(b&&a.k===b.k){const v=a.v+b.v;merges.push({a:{...a},b:{...b},result:v?{k:a.k,v}:null});if(v)out.push({k:a.k,v});j++;}else out.push({...a});}segment.forEach((i,j)=>next[i]=out[j]||null);segment=[];};
  for(const id of ids){if(board[id]==='#')flush();else segment.push(id);}flush();
 }
 return {board:next,changed:key(next)!==key(board),merges};
}
export function won(level,board){const found=board.filter(t=>t&&t!=='#');return found.length===Object.values(level.target).filter(v=>v!==0).length&&['x','n'].every(k=>level.target[k]===0?!found.some(t=>t.k===k):found.filter(t=>t.k===k).length===1&&found.find(t=>t.k===k).v===level.target[k]);}
export function initial(level){return {board:structuredClone(level.board),moves:0,undos:3,history:[],events:[],status:'playing',merges:[]};}
export function act(level,state,dir){if(state.status!=='playing')return state;const m=slide(state.board,dir);if(!m.changed)return {...state,merges:[],message:'이 방향으로는 움직이지 않아요. 횟수는 줄지 않았어요.'};const moves=state.moves+1;return {...state,board:m.board,moves,history:[...state.history,{board:state.board,moves:state.moves}],events:[...state.events,{type:'move',dir,merges:m.merges,at:Date.now()}].slice(-400),merges:m.merges,message:'',status:won(level,m.board)?'won':moves>=level.limit||DIRS.every(d=>!slide(m.board,d).changed)?'lost':'playing'};}
export function undo(level,state){if(!state.undos||!state.history.length)return state;const p=state.history.at(-1);return {...state,board:p.board,moves:p.moves,undos:state.undos-1,history:state.history.slice(0,-1),status:'playing',merges:[],message:'한 수 전으로 돌아왔어요.',events:[...state.events,{type:'undo',at:Date.now()}]};}
export function solve(level,maxDepth=level.limit,maxStates=65000){const q=[{b:level.board,path:[]}],seen=new Set([key(level.board)]);for(let i=0;i<q.length&&seen.size<maxStates;i++){const {b,path}=q[i];if(won(level,b))return path;if(path.length>=maxDepth)continue;for(const d of DIRS){const m=slide(b,d),k=key(m.board);if(!m.changed||seen.has(k))continue;seen.add(k);q.push({b:m.board,path:[...path,d]});}}return null;}
export function greedy(level){let s=initial(level),seen=new Set();while(s.status==='playing'){const options=DIRS.map(d=>({d,...slide(s.board,d)})).filter(m=>m.changed&&!seen.has(key(m.board))).sort((a,b)=>b.merges.length-a.merges.length);if(!options.length)break;seen.add(key(s.board));s=act(level,s,options[0].d);}return s;}
