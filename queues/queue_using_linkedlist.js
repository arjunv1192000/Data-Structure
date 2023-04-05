class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.front=node
            this.rear=node
            
        }else{
          this.rear.next=node
          this.rear=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("the queue is empty");
        }else{
           this.front=this.front.next
            
        }

    }
    print(){
        if(this.isEmpty()){
            console.log("the queue is empty");
        }else{
            let curr=this.front
            let queue=""
            while(curr){
                queue +=`${curr.value} `
                curr=curr.next
            }
            console.log(queue);
            
        }
    
    }
    
    
}
const newqueue=new Queue()
newqueue.enqueue(100)
newqueue.enqueue(200)
newqueue.enqueue(300)
newqueue.enqueue(400)
newqueue.enqueue(500)
newqueue.enqueue(600)
newqueue.enqueue(700)
newqueue.dequeue()
newqueue.dequeue()
newqueue.dequeue()
newqueue.dequeue()


newqueue.print()