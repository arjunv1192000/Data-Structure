// stack implimentation using linbked list


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.top=node
        }else{
            this.node.next=this.top
            this.top=node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty");
        }else{
            this.top.next=this.top
            this.size--
        }
    }
}