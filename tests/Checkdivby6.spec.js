
    const{test,expect}= require('@playwright/test')

    test("Validate div by 6 or not",()=>{

        const b = 27;

if(b % 6 === 0)
{

    console.log("the number" + b +":divisble by 6")

}

else{

    console.log("the number" + b +":is not divisble by 6")
}

    })

