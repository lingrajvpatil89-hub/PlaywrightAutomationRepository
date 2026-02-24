const {test,expect}= require('@playwright/test')

test("Print even from 120 to 80",()=>{

for(let i=120;i>=80;i--)

    {

        if(i%2==0)
        { 
            console.log(i);

        }
       

    }




})