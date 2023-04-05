class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class Doublelinkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0

    }
    isEmpty(){
        return this.size===0;
    }
    prepand(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node


        }
        this.size++
    }
    
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr=this.head
            let listvalue=''
            while(curr){
                listvalue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalue);

        }


       
    }
    printreverse(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr=this.tail
            let listvalue=''
            while(curr){
                listvalue +=`${curr.value} `
                curr=curr.prev
            }
            console.log(listvalue);
        }
    }


}
let list=new Doublelinkedlist()
list.append(100)
list.append(200)
list.append(300)
list.append(400)
list.prepand(1000)
list.prepand(2000)
list.print()
list.printreverse()