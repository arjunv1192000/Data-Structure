
function selectionsort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
            if(min !=i){
                let temp=arr[min]
                arr[min]=arr[i]
                arr[i]=temp
            }
        }
    }
    console.log(arr);
}
selectionsort([34,67,8,9,2,23,0,-12])



