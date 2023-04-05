// creation of node in linkedlist 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// creating a linked list


class linkedlist {
    constructor() {
        this.head = null
        this.tail=null
        this.size = 0

    }
    isEmpty() {
        return this.size === 0;
    }
    getsize() {
        return this.size;
    }
    // insert value to the node
    // O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail=node
        } else {
            node.next = this.head
            this.head = node

        }
        this.size ++
    }


    // insert value at the end 
    // O(1)
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node

        }else{
           this.tail.next=node
           this.tail=node

        }
        this.size++
    }

    
    // insert value at given index
    //O(n)
    insert(index,value){
        if(index<0||index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node= new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    // remove value at given index

    remove(index){
        if(index<0 || index>this.size){
            return null
        }
        let removeNode=this.head
        if(index===0){
            removeNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
        return removeNode.value

    }

    //remove node at the given value
    // O(n)

    removenode(value){
        if(this.isEmpty){
            return null
        }
        if(this.head===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next)
            {
                removeNode=prev.next
                prev.next=removeNode.next
                this.size--
                return value
            }
        }

    }

    removefromFront(){
        if(this.isEmpty()){
            return null
        }else{
            const value=this.head.value
            this.head=this.head.next
            this.size--
            return value
        }
    }removefromEnd(){
        if(this.isEmpty){
            return null
        }
        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            prev=this.head
            while(prev.next !==this.tail){
                prev=prev.next
            }
            prev.next=null
            prev=this.tail
        }
        this.size--
    }

    search(value){
        if(this.isEmpty()){

            return -1;
        }
        let i=0
        let curr=this.head
        while(curr){
            if(curr.value===value)
            {
                return i
            }
            curr=curr.next
            i++
        }
        
    }


    // print the given list 
    // O(n)
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
 list.isEmpty()
 list.print()
 list.append(1)
 list.append(2)
 list.append(3)
 list.append(4)
 list.append(5)
 list.print()
 console.log(list);
 
 

 
