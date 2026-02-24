const{test,expect}=require('@playwright/test')

test("3. Write a program to print numbers in between 1 to 100 which are divisible by 7",()=>
    
    {

for (let i=0; i<=100;i++)
{

if(i%7 == 0)
{
    console.log(i +" : The numbers are divisible by 7")

}

    
}



})