const {test,expect} = require('@playwright/test')

test("Print the number of digits in a given number", ()=>{


 const num = 12345;

 if (num>=0 && num<=9)
 {
    console.log("The num is a single digit num")

 }

  else if (num>=10 && num<=99)
 {
    console.log("The num is a two digit num")

 }

  else if (num>=100 && num<=999)
 {
    console.log("The num is a three digit num")

 }

   else if (num>=1000 && num<=9999)
 {
    console.log("The num is a four digit num")

 }

    else if (num>=10000 && num<=99999)
 {
    console.log("The num is a five digit num")

 }

 else
    {
        console.log("The digits in num are greater then 5")
 }

 })