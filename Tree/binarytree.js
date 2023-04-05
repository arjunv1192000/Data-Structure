class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const node = new Node(value);
  
      if (!this.root) {
        this.root = node;
      } else {
        this._insertNode(this.root, node);
      }
    }
  
    _insertNode(currentNode, newNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          this._insertNode(currentNode.left, newNode);
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          this._insertNode(currentNode.right, newNode);
        }
      }
    }
  }
  
 
  const tree = new BinaryTree();
  tree.insert(4);
  tree.insert(2);
  tree.insert(7);
  tree.insert(1);
  tree.insert(3);
  tree.insert(6);
  tree.insert(9);
  
  console.log(tree.root); 
  
