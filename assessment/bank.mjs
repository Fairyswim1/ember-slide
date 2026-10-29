export const VERSION='2026.10.30.ember.1';
export const source={"title":"교육부 고시 제2022-33호 [별책8] 수학과 교육과정","sha256":"a11706f7c7a8e0aa650a4d08549895ff10f7920b1bee7b2c2f4ce79ad3795ac8","assessmentPages":[53,54,55]};
export const standards={"9수02-02":{"text":"일차식의 덧셈과 뺄셈의 원리를 이해하고, 그 계산을 할 수 있다.","page":40,"printedPage":34,"skills":{"like":"동류항과 다른 항 구별","add":"일차식의 덧셈에서 계수와 상수항 계산","subtract":"괄호 앞 뺄셈과 부호 처리","principle":"분배법칙과 동류항 계산 원리 구별"},"explain":"2x와 3x는 5x로 합칠 수 있지만 2x와 3은 왜 한 항으로 합칠 수 없나요? (4x−2)−(x−5)에서 뒤 괄호 안 두 항의 부호가 모두 바뀌는 이유도 설명하세요.","rubric":"문자와 차수가 같은 항 / 분배법칙 (2+3)x / 상수항과 x항 구별 / 뺄셈은 반대 부호의 식을 더함 / 0x=0과 x=0을 혼동하지 않음","limit":"정수 계수의 동류항과 간단한 일차식 덧셈·뺄셈을 표본으로 확인합니다. 분수 계수와 복잡한 식은 미확인입니다. 계산 원리 설명은 교사 검토가 필요하며 게임 승리는 공식 이수 판정이 아닙니다."}};
export const profiles={'ember-slide':{title:'엠버 슬라이드',codes:['9수02-02'],color:'#a06535',context:'공방의 조각과 다른 새로운 식으로 동류항과 계산 원리를 혼자 확인해 보세요.'}};
const field=(key,label,expected,type='number',extra={})=>({key,label,expected,type,...extra});
export function checkField(f,value){const s=String(value??'').trim().replaceAll('−','-');return f.type==='number'?/^-?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)&&Number(s)===f.expected:s===String(f.expected);}
export function grade(task,response){const fields=task.fields.map(f=>({key:f.key,correct:checkField(f,response[f.key])}));return {correct:fields.every(f=>f.correct),fields};}
export function makeTasks(game,round=0){if(game!=='ember-slide')throw Error('Unknown game');round=((round%3)+3)%3;const tasks=[];const add=(skill,v,prompt,fields,hint,math)=>tasks.push({id:VERSION+':'+game+':'+round+':'+skill+':'+v,code:'9수02-02',skill,variant:v,round,prompt,fields,hint,math});
const answer=(a,b)=>[field('coefficient','x의 계수 (x 앞의 수)',a),field('constant','상수항 (문자 없는 수)',b)];
for(let v=0;v<3;v++){const a=round*3+v+2,b=v+2,c=round+2,d=v+4;
add('like',v,a+'x와 동류항인 것은 무엇인가요?',[field('answer','동류항',(-b)+'x','choice',{options:[String(b),(-b)+'x',b+'x²',b+'y']})],'문자와 차수가 모두 같은 항을 찾아요. 계수는 달라도 돼요.');
add('add',v,'('+a+'x − '+b+') + ('+c+'x + '+d+')를 간단히 하세요.',answer(a+c,d-b),'x항끼리, 상수항끼리 모아 더해요.',{left:[a,-b],right:[c,d],op:'+'});
add('subtract',v,'('+a+'x + '+b+') − ('+c+'x − '+d+')를 간단히 하세요.',answer(a-c,b+d),'뒤 괄호 안의 두 항 모두 부호가 바뀌어요.',{left:[a,b],right:[c,-d],op:'-'});
const pairs=[['동류항인 두 항 '+a+'x + '+b+'x를 합치는 원리는?', '(계수의 합) × x',['(계수의 합) × x','계수끼리 곱하고 x²','x를 없애고 계수만 더함']],['일차식에서 상수 '+a+'와 '+b+'x를 합칠 때 옳은 것은?', '서로 다른 항이므로 그대로 둔다',['서로 다른 항이므로 그대로 둔다',(a+b)+'x',String(a+b)]],['공방에서 '+a+'x와 −'+a+'x가 사라졌어요. 정확한 뜻은?', '계수의 합이 0이므로 0x = 0',['계수의 합이 0이므로 0x = 0','문자 x의 값이 반드시 0','x²로 바뀌었다']]];const p=pairs[(v+round)%3];add('principle',v,p[0],[field('answer','계산 원리',p[1],'choice',{options:p[2]})],'분배법칙과 동류항의 뜻을 생각해요. 0x는 x가 어떤 수여도 0이에요.');}
return tasks;
}
export function recordAttempt(task,response,history=[],hinted=false){
 const graded=grade(task,response),previous=history.filter(a=>a.taskId===task.id);
 return {taskId:task.id,code:task.code,skill:task.skill,round:task.round,variant:task.variant,version:VERSION,at:new Date().toISOString(),prompt:task.prompt,response:structuredClone(response),...graded,hinted,attempt:previous.length+1,independent:graded.correct&&!hinted&&previous.length===0};
}
export function report(game,attempts,reviews={}){return profiles[game].codes.map(code=>{
 const s=standards[code],rows=Object.entries(s.skills).map(([skill,title])=>{
  const a=attempts.filter(a=>a.code===code&&a.skill===skill&&a.version===VERSION);
  const count=new Set(a.filter(a=>a.independent).map(a=>a.taskId)).size;
  return {skill,title,independent:count,required:2,checked:count>=2,attempts:a.length,errors:a.filter(a=>!a.correct).length,assisted:a.filter(a=>a.hinted).length};
 });
 const observed=rows.every(r=>r.checked),any=rows.some(r=>r.attempts),review=reviews[code];
 const reviewed=review?.verdict==='sufficient'&&review?.response?.trim()&&review?.note?.trim()&&review.evidenceCount===attempts.filter(a=>a.code===code).length;
 return {code,text:s.text,rows,observed,status:!any?'아직 확인하지 않음':!observed?'추가 확인 필요':reviewed?'확인 과제 충족 · 교사 검토 기록 있음':'독립 수행 확인 · 설명 검토 대기',reviewed:!!reviewed,limit:s.limit};
});}
