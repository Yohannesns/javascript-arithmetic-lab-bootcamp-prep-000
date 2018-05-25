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
  var parsed = parseInt(n)
  if (isNaN(parsed)){
    return NaN
  }
  //  elseif(parsed === -n){
  //  return (10*n)
 }
 else{
    return parsed
  }
}
function preserveDecimal(n){
  return parseFloat(n)
}
