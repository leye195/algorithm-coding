class QElement{
    constructor(element,priority){
        this.element=element;
        this.priority=priority;
    }
}
class PriorityQueue{
    constructor(){
        this.items=[];
    }
    enqueue(item,priority){
        let ele=new QElement(item,priority);
        let contain=false;
        for(let i=0;i<this.items.length;i++){
            if(this.items[i].priority>ele.priority){
                this.items.splice(i,0,ele);
                contain=true;
                break;
            }
        }
        if(!contain)
            this.items.push(ele);
    }
    dequeue(){
        if(this.isEmpty())
            return "Unknown";
        return this.items.shift();
    }
    front(){
        if(this.isEmpty())
            return "Empty";
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    printQueue(){
        let s="";
        for(let i=0;i<this.items.length;i++)
            s+=this.items[i].element+" "
        return s
    }
}