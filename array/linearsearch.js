function linearsearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
console.log( linearsearch([2,4,5,6,17,34,89,67],4));
console.log( linearsearch([2,4,5,6,17,34,89,67],3));
console.log( linearsearch([2,4,5,6,17,34,89,67],34));
