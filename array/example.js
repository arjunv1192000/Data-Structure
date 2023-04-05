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
        return this.size===0
    }
    getsize(){
        return this.size
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
         let listvalues=""
         while(curr){
             listvalues +=`${curr.value} `
             curr=curr.next
         }
         console.log(listvalues);
 
     }
     }
     printreverse(){
        if(this.isEmpty()){
            console.log("lssdsd");
        }else{
            let curr=this.tail
            let listvalue=''
            while(curr){
                listvalue =+`${curr.value} `
                 curr=curr.prev
            }
            console.log(listvalue);
        }
     }
    
}
const list=new Doublelinkedlist()
list.append(100)
list.append(200)
list.append(300)
list.append(400)
list.append(500)
list.append(600)
list.print()
list.printreverse()