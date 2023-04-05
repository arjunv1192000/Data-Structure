class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
             this.head=node
         
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    duplicate(){
        let curr=this.head
        let value=new Set()
        let duplicate=new Set()
        
        while(curr){
            if (value.has(curr.value)) {
                duplicate.add(curr.value)
              } else {
                value.add(curr.value);
              }
              curr = curr.next;
        }
        console.log(duplicate);
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr=this.head
            let listvalue=""
            while(curr){
                listvalue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalue);
        }
        
    }
}
const list=new linkedlist()
list.append(10)
list.append(20)
list.append(20)
list.append(30)
list.append(20)
list.append(20)
list.append(30)
list.append(30)
list.print()
console.log(list.duplicate());