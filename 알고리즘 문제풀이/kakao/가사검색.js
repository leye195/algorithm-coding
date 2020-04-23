//효율성: 2/5 
//정확성: 18/18 통과 
//트라이 자료구를를 이용한 문제
/**
 * 문제 해설은 queries에 담긴 문자열을 words 담긴 문자열과 하나하나 비교하는 방법을 사용하면
 * 효율성 풀이를 통과 못한다고 되어 있음...
 * 
 * 
 * 효율성은 통과하지 못했지만...풀이 과정을 적어봄
 * 일단,?가 어디서 부터 시작되는지 것인지 확인해
 * 나중에 startsWith와 endsWith 중 무엇 적용할 것인지 체크해줌
 * 본인 같은 경우는 flag변수를 만들어 0/1로 구분해줬음
 * 
 * flag가 0인 경우 end with을 사용하는데,
 * lastIndexOf를 이용해 마지막 ? 위치를 알아낸 뒤 ?가 아닌 문자열들을 분리 시켜줌
 * 
 * flag가 1인 경우 start with 역시 end with가 비슷하게
 * indexOf를 이용해 첫 ? 위치를 알아낸 뒤 나머지 문자열들을 ?으로 부터 분리 시켜준다
 * 
 * 마지막으로 words에 있는 것들을 startsWith/endsWith으로 확인 진행  
 */
function solution(words, queries) {
    let answer = [];
    for(let i=0;i<queries.length;i++){
        let flag=0
        if(queries[i][0]==="?") flag=0; //end with
        else if(queries[i][queries[i].length-1]==="?") flag=1 //start with
        if(flag===0){
            let tmp=queries[i].slice(queries[i].lastIndexOf("?")+1,queries[i].length),cnt=0; 
            console.log(tmp)
            for(let j=0;j<words.length;j++){
                if(words[j].endsWith(tmp)&&words[j].length===queries[i].length)
                    cnt+=1
            }
            answer.push(cnt)
        }else if(flag===1){
            let tmp=queries[i].slice(0,queries[i].indexOf("?")),cnt=0;
            for(let j=0;j<words.length;j++){
                if(words[j].startsWith(tmp)&&words[j].length===queries[i].length)
                    cnt+=1;
            }
            answer.push(cnt);
        }
    }
    return answer;
}