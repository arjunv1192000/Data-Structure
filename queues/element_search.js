// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     enqueue(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.front=node
//             this.rear=node
//         }else{
//             this.rear.next=node
//             this.rear=node
//         }
//         this.size++
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("the given queue");
//         }else{
//             this.front=this.front.next
//             this.size--
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("the queue is empty");
//         }else{
//             let curr=this.front
//             let queue=""
//             while(curr){
//                 queue +=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(queue);
            
//         }
    
//     }
//     search(number){
//         if(this.isEmpty()){
           
//         }else{
//             let curr=this.front
//             let count=0
//             while(curr){
//                 count++
//                 if(curr.value===number){
//                     curr=curr.next
                   
//                     console.log(count);

//                 }
//             }
//         }
//     }
// }
// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.enqueue(60)
// queue.enqueue(70)
// queue.enqueue(80)
// queue.enqueue(90)
// queue.enqueue(100)
// queue.enqueue(110)
// queue.print()
// queue.search(100)


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.rear=null
        this.front=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.rear=node
            this.front=node
        }else{
            this.rear.next=node
            this.rear=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            this.front.next=this.front
        }
    }
    display(){
        if(this.isEmpty()){
            console.log("queue is empty..");
        }else{
            let curr=this.front
            let listvalue=""
            while(curr){
                listvalue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalue);
        }
    }
}
const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.display()