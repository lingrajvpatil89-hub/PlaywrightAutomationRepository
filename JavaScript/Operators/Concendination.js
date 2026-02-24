/*
 concatenation operator  -  +
 <operand>  <operator>  <operand>
 "10"     +     20    => 1020
 
  <operand>  <operator>  <operand>
 "10"     +     "20"    => 1020
 
  <operand>  <operator>  <operand>
 10     +     20    => 30
*/
 
let x="Bangalore"
let y="the City Name is "
let result = (y + x)
console.log(result);
 
 
let c = "10" // any double quote will be considered as string so result will be 1020
let d = 20
let res = (c+d)
console.log(res)