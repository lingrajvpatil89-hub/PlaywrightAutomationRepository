const {test,expect}=require('@playwright/test')

test("WeekdaybySwitch",()=>{

const Weekday = 4;

let Weeknameday;

switch(Weekday)
{
    case 1:

    Weeknameday = console.log("today is monday");

    break;

    case 2:

    Weeknameday = console.log("today is Tuesday");

    break;

    
    case 3:

    Weeknameday = console.log("today is Wednesday");

    break;

     case 5:

    Weeknameday = console.log("today is Thursaday");

    break;

     case 4:

    Weeknameday = console.log("today is Friday");

    break;

       case 6:

    Weeknameday = console.log("today is Saturday");

    break;

     case 7:

    Weeknameday = console.log("today is Sunday");

    break;

     case 8:

    Weeknameday = console.log("Not a valid weekday");

    break;





}




})