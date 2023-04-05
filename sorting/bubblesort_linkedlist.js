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
        this.size===0
    }
    getsize(){
        return this.size
    }
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node

        }else{
          node.next=this.head
          this.head=node

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
        bubblesortlinkedlist(head){
            if(this.isEmpty()){
                console.log("list is empty");
            }else{
                let curr=this.head
                while(curr && curr.next){
                    if(curr.value>curr.next.value){
                         let temp=curr.value
                         curr.value=curr.next.value
                         curr.next.value=temp
                    }
                    curr=curr.next
                }
            }
        }
           
           
       
}
const list=new linkedlist()
list.append(10)
list.append(100)
list.append(104)
list.append(1042)
list.append(104)
list.append(106)
list.append(108)
list.append(1000)
list.append(102)
list.print()
list.bubblesortlinkedlist()
list.print()