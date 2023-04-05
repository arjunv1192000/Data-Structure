class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarysearchtree{
    constructor(){
        this.root=null
      
    }
    isEmpty(){
        return this.root===null
    }
    
    insert(value){
         const node=new Node(value)
         if(this.isEmpty()){
            this.root=node
         }else{
            this.insertnode(this.root,node)
         }
    }
    insertnode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertnode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertnode(root.right, node);
            }
        }
    }
    

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)

            }else{
                return this.search(root.right,value)
            }
          

            }

            
        }
        preorder(root){
            if(root){
                console.log(root.value);
                this.preorder(root.left)
                this.preorder(root.right)
            }

        }
        Inorder(root){
            if(root){
                this.Inorder(root.left)
                console.log(root.value);
                this.Inorder(root.right)
            }
        }
        postOrder(root){
            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)
                console.log(root.value);
            }
        }
        BFS(){
            const queue=[]
            queue.push(this.root)
            while(queue.length){
                let curr=queue.shift()
                console.log(curr.value);
                if(curr.left){
                    queue.push(curr.left)
                }
                if(curr.right){
                    queue.push(curr.right)
                }
            }
        }

        delete(value){
            this.root=this.deletenode(this.root,value)
        }
        deletenode(root,value){
            if(root===null){
                return root
            }
            if(value<root.value){
                root.left=this.deletenode(root.left,value)
            }else if(value>root.value){
                root.right=this.deletenode(root.right,value)
            }else{
                if(!root.left&& !root.right){
                    return null
                }
                if(!root.left){
                    return root.right
                }else if(!root.right){
                    return root.left
                }
                root.right=this.deletenode(root.right,root.value)
            }
            return root 
        }
       

    }


const BST=new binarysearchtree()
console.log(BST.isEmpty());
BST.insert(10)
BST.insert(5)
BST.insert(3)
BST.insert(7)
BST.insert(15)
console.log(BST.search(10));
console.log(BST.search(5));
console.log(BST.search(3));
console.log(BST.search(7));
console.log(BST.search(15));
console.log("");
console.log("");
BST.preorder(BST.root)
console.log("");
console.log("");
BST.Inorder(BST.root)
console.log("");
console.log("");
BST.postOrder(BST.root)
BST.BFS()
BST.checkBST()
