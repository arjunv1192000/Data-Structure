function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }

        }
    }
    console.log(arr);
}
let arr=[20,45,2,67,12,67,89,3,56,7,8,90,55]
bubblesort(arr)
