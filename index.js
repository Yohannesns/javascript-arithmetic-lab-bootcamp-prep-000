  function add(a,b){
    return a+b
  }
  function subtract(a,b){
    return a-b
  }
  function multiply(a,b){
    return a*b
  }
  function divide(a,b){
    return a/b
  }
  function inc(n){
    return n = n+1
  }
  function dec(n){
    return n = n-1
  }
  function makeInt(n){
    if(n>=0){
    return parseInt(n)
   }
  //  else if (n <0){
  //    return 0
  //  }
   else{
     return NaN
   }
 }
  function preserveDecimal(n){
    return parseFloat(n)
  }
