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
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node

        }else{
            let prev= this.head
            while (prev.next) {
                prev=prev.next    
            }
            prev.next=node

        }
        this.size++
    }
   decimalTobinary(decimal){
    let quotient=decimal
    while(quotient>0){
        this.append(quotient%2)
        quotient=Math.floor(quotient/2)
    }
   }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");

        }else{
            let curr=this.head
            let listvalues=''
            while (curr) {
                listvalues +=`${curr.value} `;
                curr = curr.next
                
            }
            console.log(listvalues);
        }
    }

}

const list=new linkedlist()
list.decimalTobinary(17)
list.print()
