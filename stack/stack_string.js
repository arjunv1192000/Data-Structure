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
addstring(str){ 

    let i = 0;
    let reversedStr = ""
    while (i !== str.length) {
        this.push(str.charAt(i));
        i++;
    }
   
}
reverse(){
    let prev=null
    let curr=this.top
    while(curr){
        let next=curr.next  
        curr.next=prev
        prev=curr
        curr=next
    }
    this.top=prev
}

}
const stack=new Stack()
let a="arjun"
stack.addstring(a)
stack.print()
stack.reverse()
stack.print()