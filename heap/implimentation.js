//creation of min heap

class minHeap{
    constructor(){
        this.heap=[]
    }
    getleft(parentindex){
        return 2*(parentindex)+1
    }
    getright(parentindex){
        return 2*(parentindex)+2
    }
    getparent(childindex){
        return Math.floor((childindex-1)/2)
    }
    leftchild(index){
        return this.heap[this.getleft(index)]
    }
    rightchild(index){
        return this.heap[this.getright(index)]
    }
    parent(index){
        return this.heap[this.getparent(index)]
    }
    swap(indexOne,indexTwo){
        const temp=this.heap[indexOne]
        this.heap[indexOne]=this.heap[indexTwo]
        this.heap[indexTwo]=temp
    }
    addvalue(value){
        this.heap.push(value)
        this.heapifyup()
    }
    heapifyup(){
        let index=this.heap.length-1
        while(this.parent(index)<this.heap[index]){
            this.swap(index,this.getparent(index))
            index=this.getparent(index)
        }
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        let item=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown()

        return item;
    }
    heapifydown() {
        let index = 0;
        while (this.leftchild(index) !== undefined) {
          let smallerChildIndex = this.getleft(index);
          if (
            this.rightchild(index) !== undefined && this.rightchild(index) < this.leftchild(index)) {
            smallerChildIndex = this.getright(index);
          }
          if (this.heap[index] < this.heap[smallerChildIndex]) {
            break;
          } else {
            this.swap(index, smallerChildIndex);
          }
          index = smallerChildIndex;
        }
      }
      search(value){
        
        this.heap.forEach(element => {
            if(element===value){
                console.log("value is found");
            }else{
               console.log("not found");
            }
            
            
        });
      }

      
    display(){
        console.log(this.heap);
    }
}
const heap=new minHeap()
heap.addvalue(100)
heap.addvalue(200)
heap.addvalue(1)
heap.addvalue(10)
heap.addvalue(30)
heap.addvalue(4)
heap.display()
heap.search(10)

// creation os maxheap

class maxHeap{
    constructor(){
        this.heap=[]
    }
    getleft(parentindex){
        return 2*(parentindex)+1
    }
    getright(parentindex){
        return 2*(parentindex)+2
    }
    getparent(childindex){
        return Math.floor((childindex-1)/2)
    }
    leftchild(index){
        return this.heap[this.getleft(index)]
    }
    rightchild(index){
        return this.heap[this.getright(index)]
    }
    parent(index){
        return this.heap[this.getparent(index)]
    }
    swap(indexOne,indexTwo){
        const temp=this.heap[indexOne]
        this.heap[indexOne]=this.heap[indexTwo]
        this.heap[indexTwo]=temp
    }
    addvalue(value){
        this.heap.push(value)
        this.heapifyup()
    }
    heapifyup(){
        let index=this.heap.length-1
        while(this.parent(index)>this.heap[index]){
            this.swap(index,this.getparent(index))
            index=this.getparent(index)
        }
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        let item=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown()

        return item;
    }
    heapifydown() {
        let index = 0;
        while (this.leftchild(index) !== undefined) {
          let smallerChildIndex = this.getleft(index);
          if (this.rightchild(index) !== undefined && this.rightchild(index) < this.leftchild(index)) {
            smallerChildIndex = this.getright(index);
          }
          if (this.heap[index] > this.heap[smallerChildIndex]) {
            break;
          } else {
            this.swap(index, smallerChildIndex);
          }
          index = smallerChildIndex;
        }
      }
      search(value){
        
        this.heap.forEach(element => {
            if(element===value){
                console.log("value is found");
            }else{
               return
            }
            
            
        });
      }

      
    display(){
        console.log(this.heap);
    }
}
const minheap=new maxHeap()
minheap.addvalue(100)
minheap.addvalue(200)
minheap.addvalue(1)
minheap.addvalue(10)
minheap.addvalue(30)
minheap.addvalue(4)
minheap.display()
minheap.search(10)
