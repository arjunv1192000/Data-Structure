function insert()
{
let array=[2,4,6,7,9,56,32,67,9]
let value=20;
let pos=3;

for(let i=array.length;i>=pos;i--){
    array[i+1]=array[i];
}
array[pos]=value;
array.length--;
console.log(array)


}
insert()



//  0(n)

//insert an  element at given possition 



function addbegining()
{
    let array=[4,5,6,7,8,9,10,11]
    let newarr=[100,300,400]

    for(let i=0;i<newarr.length;i++)
    {
        array.push(newarr[i])
    }
    console.log(array)
}
addbegining()

// O(n)
// insertion at begining



function addend(){
    let array=[2,3,4,5,6,7,8]
    let newarr=[1000,200]
    for(let i=0;i<newarr.length;i++){
        array.unshift(newarr[i])
    }
    console.log(array)
}
addend()

//O(n)

function sum(){
    let array=[3,5,6,7,8,4,34,22]
    let sum=0;

    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    console.log("total sum=",sum);
}
sum()

//sum of n numbers
//0(n)



