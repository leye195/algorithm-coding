function backtrack(mp,order,st,visited,index){
    if(index+1===order.length){
        return;
    }
    for(let i=index+1;i<visited.length;i++){
        if(visited[i]===0){
            visited[i] = 1;
            st+=order[i];
            console.log(st);
            backtrack(mp,order,st,visited,i);
            st = st.slice(0,-1);
            visited[i] = 0
        }
    }
    return;
}

function solution(orders, course) { 
    
    
    const answer = [];
    const mp = {};
    
    for(let i=0;i<orders.length;i++){
        const order = orders[i];
        const visited = [...order].fill(0);
        console.log(order,'...');
        for(let j=0;j<order.length;i++){
            visited[j] = 1;
            backtrack(mp,order,order[j],visited,j);
            visited[j] = 0;
        }
    }
    
    return answer;
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],[2,3,4]);