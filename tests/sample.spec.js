 const{test,expect}= require('@playwright/test')

 test('navigate to w3school',async({page})=>{

     await page.goto('https://www.w3schools.com/');

   

    const title = await page.title();

    console.log("The title of w3school page is : " + title);


    const url = await page.url();

 console.log("The url to w3school is :" + url);

  await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
   await expect (page).toHaveURL("https://www.w3schools.com/");



 })