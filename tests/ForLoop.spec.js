const {test,expect}=require('@playwright/test')

test("Write a program to print odd numbers from 131 to 161",()=>{

for (let i=131;i<=161; i++)
{

    if(i%2 != 0)
    {

        console.log(i + "Are the odd numbers")

    }
}


})