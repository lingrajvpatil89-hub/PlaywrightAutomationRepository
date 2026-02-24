const {test,expect}=require('@playwright/test')

test('login->createUser-> DeleteUser-> logout-> closeApplication',async({page})=>{

    await page.goto("http://localhost/login.do");

    console.log("Naviagted to Actitime page")

   const title= await page.title();
   console.log ("ActiTime page title is:" +title )

      await page.locator("//input[@id='username']").fill('admin')
    console.log("User name entered successfully")

    await page.locator("//input[@class='textField pwdfield']").fill('manager')
      console.log("passowrd entered successfully")

      await page.locator("//a[@id='loginButton']").click()
        console.log("Login button clicked successfully")


        await page.locator("//a[@class='content users']").click()
        console.log("Clicked on the USERS tab successfully")


        
        await page.locator("//div[@id='gettingStartedShortcutsMenuCloseId']").click()
        console.log("Clicked on the 'X'' tab popup successfully")


        await page.locator("//div[@class='addUserButton beigeButton useNativeActive']").click()
        console.log("Clicked on the Add User tab successfully")

        await page.locator("//input[@id='userDataLightBox_firstNameField']").fill('user1')
        console.log("First name entered successfully")

         await page.locator("//input[@id='userDataLightBox_lastNameField']").fill('test1')
        console.log("Last name entered successfully")

        await page.locator("//input[@id='userDataLightBox_emailField']").fill('user1@gmail.com')
        console.log("Last name entered successfully")

          await page.locator("//input[@id='userDataLightBox_usernameField']").fill('user1')
        console.log("Login details username entered successfully")

        await page.locator("//input[@id='userDataLightBox_passwordField']").fill('user1')
        console.log("Login details password entered successfully")

        await page.locator("//input[@id='userDataLightBox_passwordCopyField']").fill('user1')
        console.log("Login details retypepassword entered successfully")


        await page.locator("//div[@id='userDataLightBox_commitBtn']").click()
        console.log("Clicked on 'Create User' button successfully")

await page.waitForTimeout(5000)

        await page.locator("(//div/span[text()='test1, user1'])[1]").click()
        console.log("Clicked on 'User1 test1' user successfully")
    await page.waitForTimeout(5000)


    
       await page.waitForTimeout(2000)
        page.on('dialog', async(alertWindow)=>{
            const message=await alertWindow.message()
            console.log("Alert Message :"+message);
            await alertWindow.accept()


         
    })
  await page.locator("#userDataLightBox_deleteBtn").click()
        await page.waitForTimeout(2000)

         console.log("Clicked on 'Delete Button' successfully")

})



