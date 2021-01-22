function sum(arr) {
    return arr.reduce((x,y)=>x+y,0);
}

function solution(answers) {
    const answer = [];
    const userAnswers = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    const checked = [[],[],[]];
    let maxCorrect = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<answers.length;j++){
            checked[i].push(userAnswers[i][j%userAnswers[i].length]===answers[j]?1:0)
        }
        maxCorrect = Math.max(maxCorrect,sum(checked[i]));
    }
    for(let i=0;i<3;i++){
        sum(checked[i])===maxCorrect&&answer.push(i+1);
    }
    
    return answer;
}