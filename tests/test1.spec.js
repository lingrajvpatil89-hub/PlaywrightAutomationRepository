const {test,expect}= require('@playwright/test')

//traditional function

test('first traditional Playwrite test', function dispaly(){

    console.log("Running first playwright test using traditional test function")
})


//anonymous function 

test('second anonymous playwright test', function(){

    console.log("Running second playwright test using anonymous function")

})

test('third arrow function playwright test', ()=>{

    console.log("third arrow function playwright test")
})