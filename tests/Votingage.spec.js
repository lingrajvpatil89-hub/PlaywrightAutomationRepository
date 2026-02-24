const {test,expect} = require('@playwright/test')

test("Verify based on Age, the person is eligiable for Voting", ()=>{

    const Age = 18;

    if(Age >= 18)
    {
        console.log("Your age is greater then or equal to 18, so your eligiable")

    }

    else
        {
console.log("Your age is less then 18, so your not eligiable")

    }
})