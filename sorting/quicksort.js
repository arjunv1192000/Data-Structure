function quicksort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quicksort(left),pivot,...quicksort(right)]
}
let arr=[34,67,8,9,2,23,0,-12]
console.log(quicksort(arr));