const{test,expect} = require('@playwright/test')


test("Print based on weekday number, it should display weekday name", ()=>{

    const weekday = 8

    if(weekday == 1)
    {
        console.log("The selected number is :"+weekday +" and its a monday")
    }

    else if (weekday == 2)
    {
        console.log("The selected number is :"+weekday +" and its a Tuesday")
    }

 else if (weekday == 3)
    {
        console.log("The selected number is :"+weekday + " and its a Wednesday")
    }

    else if (weekday == 4)
    {
        console.log("The selected number is :" +weekday + " and its a Thursday")
    }

    
    else if (weekday == 5)
    {
        console.log("The selected number is :"+weekday + " and its a friday")
    }

     else if (weekday == 6)
    {
        console.log("The selected number is :"+weekday + " and its a saturday")
    }

       else if (weekday == 7)
    {
        console.log("The selected number is :"+weekday + " and its a sunday")
    }

else
    {
        console.log("The entered num is not valid for weekdays ")
}


})

