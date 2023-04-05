
function binary(arr,target){
    let leftindex=0
    let rightindex=arr.length
    while(leftindex<=rightindex){
       let middleindx=Math.floor((rightindex+leftindex)/2)
       if(target===arr[middleindx]){
        return middleindx
       } 
       if(target<arr[middleindx]){
        rightindex=middleindx-1

       }else{
        leftindex=middleindx+1
       }

       return -1
      


    }
   
}
console.log(binary([3,5,6,7,9,4,33,4,55],33));

