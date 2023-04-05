function checkprime(number){
    if(number<=1){
        return true
    }else{
        for(let i=2;i<number;i++){
            if(number%2==0){
                return false
            }
        }
        return true
    }
}
let arr=[1,2,3,4,5,6,7,8,9]

arr.forEach(Element =>{
    if(checkprime(Element)){
        console.log(`${Element}  is prime number`);
    }else{
        console.log(`${Element}  is not prime number`);
    }
})