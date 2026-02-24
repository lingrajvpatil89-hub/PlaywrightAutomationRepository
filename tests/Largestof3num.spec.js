const{test,expect} = require('@playwright/test')

test("Largest of three numbers",()=>{

const a= 60;
const b= 40;
const c= 50;

if(a>=b && a>=c)
{

    console.log(a+ ": is greatest of all three numbers")

}

else if (b>=a && b>=c)
{

    console.log(b+ ": is greatest of all three numbers")

}

else
    {
        console.log(c+ ": is greatest of all three numbers")

}

})