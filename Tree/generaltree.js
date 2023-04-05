
class treenode{
    constructor(value){
        this.value=value
        this.child=[]
    }
    addchild(node){
        this.child.push(node)
    }
    display(depth = 0){
        console.log(`${"---->".repeat(depth)}${this.value}`)
        this.child.forEach(child => child.display(depth + 1))
    }
}
const root=new treenode(10)
const child=new treenode(20)
const child2=new treenode(30)
const child3=new treenode(40)
const child4=new treenode(40)
const child5=new treenode(40)
const child6=new treenode(40)
const child7=new treenode(90)
root.addchild(child)
root.addchild(child2)
root.addchild(child3)
root.addchild(child4)
root.addchild(child5)
root.addchild(child6)
child6.addchild(child7)
root.display()