class treenode{
    constructor(){
        this.child={}
        this.endword=false
    }
    insert(word){
        let newnode=this
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!newnode.child[char]){
                newnode.child=new treenode()
            }
            newnode=newnode.child[char]
        }
        newnode.endword=true
    }
    search(word){
        let newnode=this
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!newnode.child[char]){
                return false
            }
            newnode=newnode.child[char]
        }
        return newnode.endword
    }
    autocomplete(prefix){
        let newnode=this
        let word=[]
        for(let i=0;i<prefix.length;i++){
            let char=prefix[i]
            if(!newnode.child[char]){
                return word
            }
            newnode=newnode.child[char]

        }
        this.display(prefix,newnode)
    }
    display(prefix="",newnode=this){
        if(newnode.endword){
            console.log(prefix);
        }
        for(const[char,child] of Object.entries(newnode.child)){
            this.display(prefix+char,child)
        }

    }
}
const tri=new treenode()
tri.insert("arjun")
tri.autocomplete("a")