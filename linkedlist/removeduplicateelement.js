class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    prepand(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.node.next=this.head
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
            this.tail=node
        }
        this.size++
    }
    linkedlistToarray(){
        let arr=[]
        let i=0
        let curr=this.head
        while(curr){
            arr[i]=curr.value
            curr=curr.next
            i++
        }
        console.log(arr);
    }
    removeduplicate(){
        let curr=this.head
        let value=new Set()
        let prev=null
        while(curr){
            if (value.has(curr.value)) {
                prev.next=curr.next
            } else {
                value.add(curr.value);
                prev=curr
            }
            curr = curr.next;
        }
       }
    print(){
        let curr=this.head
        let listvalue=""
        while(curr){
            listvalue  +=`${curr.value} `
            curr=curr.next
        }
        console.log(listvalue);
    }

}
const list=new linkedlist()
list.append(10)
list.append(10)
list.append(10)
list.append(10)
list.append(20)
list.print()
list.removeduplicate()
list.print()
