class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class Queue{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }
    addfirst(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            
        }else{
            this.head.prev=node
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    addlast(value){
        const node=new Node(value)

        if(this.isEmpty()){
            if(this.isEmpty()){

                this.head=node
                this.tail=node
            }else{
                node.prev=this.tail
                this.tail.next=node
                this.tail=node

            }
            this.size++
        }

    }
    removefirst(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            this.head=this.head.next
            this.prev=null
        }
        
    }
    removelast(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            this.tail=this.tail.prev
            this.next=null
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            let curr=this.head
            let listvalues=""
            while(curr){
                listvalues +=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalues);
        }
    }
}
const queue=new Queue()
queue.addfirst(0)
queue.addfirst(1)
queue.addfirst(12)
queue.removefirst() 
queue.addfirst(3)
queue.addfirst(4)
queue.removelast()
queue.print()