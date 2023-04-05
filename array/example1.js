// class trinode{
//     constructor(){
//         this.child={}
//         this.endword=false
//     }
//     insertion(word){
//         let newnode=this
//         for(let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!newnode.child[char]){
//                 newnode.child[char]=new trinode()
//             }
//             newnode=newnode.child[char]
//         }
//         newnode.child=this.endword
//     }
// }


class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarysearch{
    constructor(){
        this.root=null
    }

    isEmpty(){
        this.root===null
    }

    insert(root,value){
        const node=new Node()
        if(this.isEmpty()){
            this.root=node

        }else{
            this.insertnode(this.root,value)
        }
       
    }
    insertnode(root,value){
        if(root.value<value){
            if(this.left===null){
                this.left=node
            }else{
                this.insertnode(this.left,value)
            }
        }else{
            if(this.right===null){
                this.right
            }
        }
    }
}