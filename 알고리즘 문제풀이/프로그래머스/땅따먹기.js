/*
한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 
특수 규칙이 있습니다
| 1 | 2 | 3 | 5 |
| 5 | 6 | 7 | 8 |
| 4 | 3 | 2 | 1 | 
 */
function solution(land) {
    let answer=0,x=land.length;
    let dp=[];
    for(let i=0;i<=100000;i++)
        dp.push([0,0,0,0]);
    for(let i=0;i<4;i++)
        dp[0][i]=land[0][i];
    for(let i=1;i<x;i++){
        for(let j=0;j<4;j++){
            for(let k=0;k<4;k++){
                if(j!==k){
                    dp[i][j]=Math.max(dp[i][j],land[i][j]+dp[i-1][k])
                }
            }
        }
    }
    dp[x-1].forEach((item)=>{
      answer=Math.max(answer,item);  
    })
    return answer;
}