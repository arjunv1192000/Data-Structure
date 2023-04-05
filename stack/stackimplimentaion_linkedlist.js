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
    size(){
        return this.size
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
            
        }
        this.size++
       
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty");
        }else{
            this.top=this.top.next
            this.size--
        }
    }

print(){
    if(this.isEmpty()){
        console.log("stack is empty ");
    }else{
        let curr=this.top
        let stack=""
        while(curr){
            stack +=`${curr.value} `
            curr=curr.next
        }
        console.log(stack);
    }
}
peek(){
   if(this.isEmpty()){
    console.log("stack is empty");
   }else{
    console.log(this.top.value);

   }
}
checkprime(){
    curr= this.top
    let value
    while (curr) {
        value=this.pop()
        curr=curr.next
        for(i=2;i<this.size;i++){
            if(value%i==0){
                console.log("value is prime number");
            }
        }
        
    }


    
}



}
const stack=new Stack()
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)
stack.push(600)
stack.push(700)
stack.push(800)
stack.print()
