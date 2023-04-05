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
    arraytolinkedlist(arr){
        arr.forEach(Element=>{
            this.append(Element)
        })
        this.print()

    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let count=0
            let curr=this.head
            let listvalue=''
            while(curr){
                count++
                listvalue +=`${curr.value} `
                curr=curr.next
            }
         return  console.log(listvalue);
            // console.log(count);
        }
      
    }
 }
 const list=new linkedlist()


 const link=new linkedlist()
 list.arraytolinkedlist([1,2,3,4,5,6])
 list.print()
 link.arraytolinkedlist([100,200,300,400])
 link.print()


 