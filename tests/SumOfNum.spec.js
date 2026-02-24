const{test,expect}= require('@playwright/test')

test("Sum of num 1 to 10", ()=>{

let sum = 0
let total
for (let i =1; i<=10; i++)
{

    sum= sum +i;
}

console.log(sum)
 
})