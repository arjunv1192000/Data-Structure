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
    binaryTodecimal(){
      let curr=this.head
        let result=0
        let power=0
        while(curr){
            result=result+curr.value*(2**power)
            curr=curr.next
            power++
        }
        console.log(result);
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
list.append(1)
list.append(0)
list.append(0)
list.append(0)
list.append(1)
list.append(1)
list.print()
list.binaryTodecimal()