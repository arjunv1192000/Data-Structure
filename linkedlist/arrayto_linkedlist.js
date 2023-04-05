// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){

//        return this.size===0
//     }
//     getsize(){
//         return this.size

//     }
//     append(value){
//         const node= new Node(value)
//         if(this.isEmpty()){
//             this.head=node

//         }else{
//             let prev= this.head
//             while (prev.next) {
//                 prev=prev.next    
//             }
//             prev.next=node

//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");

//         }else{
//             let curr=this.head
//             let listvalues=''
//             while (curr) {
//                 listvalues +=`${curr.value} `;
//                 curr = curr.next
                
//             }
//             console.log(listvalues);
//         }
//     }

// }
// const array=[23,45,68,34,67,90,100,30,56,78,98]
// const list=new linkedlist()
// array.forEach(element => {
//     list.append(element)
// });
// list.print()


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
    getSize(){
        return this.size
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
   linkedlistTOarray(){
   let arr=[]
    let  i=0
    let curr=this.head
    while(curr){
        arr[i]=curr.value
        curr=curr.next
        i++
        }
        console.log(arr);
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
}
const list=new linkedlist()
const arr=[2,3,45,56,77,88,2,3,2,3,3,3,3,3]
const newarr =Array.from(new Set(arr));
console.log(newarr);
newarr.forEach(Element=>{
    list.append(Element)
})
list.print()
