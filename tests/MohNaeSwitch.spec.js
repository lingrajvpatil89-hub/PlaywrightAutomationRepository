const{test,expect} = require('@playwright/test')

test("Based Month number, print Month Name by switch",()=>{

const month = 4;

let MonthName;

switch(month)

{

    case 1:
        MonthName = console.log("The selected num month is January")
    break;

    case 2:
        MonthName = console.log("The selected num month is Feburary")
        break;

    case 3:
         MonthName =console.log("The selected num month is March")
        break;

        case 4:
         MonthName = console.log("The selected num month is April")
        break;

         case 5:
         MonthName = console.log("The selected num month is May")
        break;

    case 6:
         MonthName = console.log("The selected num month is June")
        break;

        case 7:
         MonthName = console.log("The selected num month is July")
        break;

        case 8:
         MonthName = console.log("The selected num month is Aug")
        break;

        case 9:
         MonthName = console.log("The selected num month is Sept")
        break;

         case 10:
         MonthName = console.log("The selected num month is October")
        break;

          case 11:
         MonthName = console.log("The selected num month is Novmber")
        break;


 case 12:
         MonthName = console.log("The selected num month is December")
        break;


}


})