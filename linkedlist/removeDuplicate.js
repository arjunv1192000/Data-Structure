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
   checknumber(){
    let curr=this.head
    let listvalue=""
    let listvalues=""
    while(curr){
        if(curr.value>0){
            listvalue +=`${curr.value},is positive `
        }else{
            listvalues +=`${curr.value},is negative `
        }
        curr=curr.next
    }
    console.log(listvalue);
    console.log(listvalues);
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
list.append(-17)
list.append(20)
list.append(-76)
list.append(30)
list.append(20)
list.append(20)
list.append(30)
list.append(30)
list.print()
list.print()
list.checknumber()