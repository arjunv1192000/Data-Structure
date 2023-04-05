

function reverseStrig(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  const result=str==reversed
  if(result){
    console.log("the string is palindrome");
  }else{
    console.log("not palindrome");
  }
  
}
reverseStrig("2malayalam")



