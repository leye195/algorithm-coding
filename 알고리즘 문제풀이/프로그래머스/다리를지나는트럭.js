function totalWeight(trucks){
    return trucks.reduce((result,{truck})=>result+truck,0);
}

function checkTruckPass(time,currentTime){
    if(time<=currentTime) return true;
    return false;
}

function solution(bridge_length, weight, truck_weights) {
    const bq = [], passed = [];
    let answer = 1;
    while(true){
        //통과 여부 체크
        const bqLength = bq.length;
        for(let i=0;i<bqLength;i++){
            if(checkTruckPass(bq[0].time + bridge_length,answer)){
                passed.push(bq.shift());
            }
        }
        if(bq.length===0&&truck_weights.length===0)
            break;
        //다리 위에 올라올수 있는지 무게 체크 
        if(truck_weights.length&&totalWeight(bq)+truck_weights[0]<=weight&&bq.length<bridge_length) {
          bq.push({truck:truck_weights.shift(),time:answer}) //truck,enterTime
        }
        answer++;
    }
    return answer;
}

solution(2,10,[7,4,5,6]);
solution(100,100,[10]);
solution(100,100,[10,10,10,10,10,10,10,10,10,10]);