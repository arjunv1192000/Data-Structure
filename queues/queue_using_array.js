class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.queue.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
   
  }
   const queue=new Queue()
   queue.enqueue(100)
   queue.enqueue(200)
   queue.enqueue(300)
   queue.enqueue(400)
   queue.dequeue()
   console.log(queue);