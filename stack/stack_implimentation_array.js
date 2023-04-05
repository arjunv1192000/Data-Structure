class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }

    sort() {
      let n = this.items.length;
    
      
      for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
          if (this.items[j] > this.items[j+1]) {
            let temp = this.items[j];
            this.items[j] = this.items[j+1];
            this.items[j+1] = temp;
          }
        }
      }
    }
    
    
  }

  const stack = new Stack();
  stack.push(100);
  stack.push(20);
  stack.push(34);
  stack.push(4);
  stack.push(4);
  stack.push(4);
  stack.push(4);
  stack.push(4);
  stack.push(4);
  stack.pop()
  stack.pop()
  stack.peek()
  console.log(stack);
  stack.sort()

  console.log(stack);
  
  
  








  