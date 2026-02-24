
const{test,expect}= require('@playwright/test')

test("Largest of two numbers",()=>{

    const a = 90
    const b= 80

    if(a>b)
    {
        console.log(a+": is the greater number")
    }

    else
    {

        console.log(b+": is the greater number")
    }


})