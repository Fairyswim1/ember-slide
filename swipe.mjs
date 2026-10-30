export function swipeDirection(dx,dy,threshold=24){
 const x=Math.abs(dx),y=Math.abs(dy);
 if(Math.max(x,y)<threshold||Math.max(x,y)<Math.min(x,y)*1.2)return null;
 return x>y?(dx<0?'left':'right'):(dy<0?'up':'down');
}
export function bindSwipe(board,onMove,enabled=()=>true){
 let start=null;
 const cancel=()=>{const old=start;start=null;board.classList.remove('dragging');if(old&&board.hasPointerCapture(old.id))board.releasePointerCapture(old.id);};
 board.addEventListener('pointerdown',e=>{
  if(start||e.isPrimary===false){cancel();return;}
  if(e.button!==0||!enabled())return;
  start={id:e.pointerId,x:e.clientX,y:e.clientY};board.setPointerCapture(e.pointerId);board.classList.add('dragging');board.focus({preventScroll:true});
 });
 board.addEventListener('pointerup',e=>{
  if(!start||start.id!==e.pointerId)return;
  const dir=swipeDirection(e.clientX-start.x,e.clientY-start.y);cancel();
  if(dir&&enabled()){e.preventDefault();onMove(dir);}
 });
 board.addEventListener('pointercancel',cancel);
 board.addEventListener('lostpointercapture',cancel);
 board.addEventListener('dragstart',e=>e.preventDefault());
 globalThis.addEventListener?.('blur',cancel);
 return cancel;
}
