
// class hashtables{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value){
//         let index = this.hash(key)
//         const bucket = this.table[index] || []
//         if(!this.table[index]){
//             this.table[index] = bucket
//         }
//         const sameKey = bucket.find(item => item[0] === key)
//         if(sameKey){
//             sameKey[1] = value
//         } else {
//             bucket.push([key, value])
//         }
//     }
//     get(key){
//         let index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         let index = this.hash(key)
//         this.table[index] = undefined
//     }
//     display(){
//         for(let i=0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }

// const table = new hashtables(100)
// table.set("name", "arjun")
// table.set("amne", "rahul")
// table.set("amen", "basil")
// table.set("4", "basil")

// table.display()





class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index] ||[]
        if(this.table[index]){
            this.table[index]=bucket
        }
        const sameKey=bucket.find(item=>item[0]===key)
        if(sameKey){
            sameKey[1]=value
        }else{
            bucket.push[[key,value]]
        }

    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            const sameKey=bucket.find(item=>item[0]==value)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const table=new hashtable(100)
table.set("4","aaaaa")
table.set("2","aaaaa")
table.set("3","aaaaa")
table.set("5","aaaaa")
table.set("6","aaaaa")
table.display()
