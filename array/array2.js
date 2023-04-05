const array=[2,5,6,7,8]
const arr=[]
let large=0
for(let i=0;i<array.length;i++){
    arr[i]=array[i]+3
    
    if(array[i] > large){

          large = array[i]
    }
}
console.log(array);
console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i] <= large){
            console.log(false);
        }else{

            console.log(true);
        }
    }


   
// let array = [];
// let arr = [];
// let n = prompt("Enter the size of the array:");

// for (let i = 0; i < n; i++) {
//     array[i] = parseInt(prompt("Enter the value of element " + (i + 1)));
// }

// for (let i = 0; i < array.length; i++) {
//     array[i + array.length] = array[i];
// }

// console.log(array);
