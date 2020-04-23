def solution(n,p):
    st_n,r=str(n),[]
    while True:
        tmp=0
        for i in st_n:
            tmp+=(ord(i)-ord('0'))**p
        if tmp not in r:
            r.append(tmp)
            st_n=str(tmp)
        else: 
            break
    print(r)

solution(57,2)
solution(638,2)

"""
function solution(n,p){
    let initNum=n,ans=[],idx=0,found=[];
    while(true){
        let tmp=0;
        while(initNum){
            let digit=initNum%10;
            initNum=initNum/10;
            for(let i=2;i<=p;i++){
                digit*=digit;
            }
            tmp+=digit;
        }
        initNum=tmp;
        if(found[initNum]==1)
            break
        found[initNum]=1
        answer[idx++]=initNum;
    }
    console.log(answer.length);
}
"""