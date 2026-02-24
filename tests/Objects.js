//Objects in JavaScripts:
//----------------------------------
 
//Objects can have PropertyName and PropertyValue, it means it stores details in the form of Key and Value pair.
 
//Example:


const {test,expect} = require('@playwright/test')

test("Print the number of digits in a given number", ()=>{

 
let student={
    "firstname":"Santosh",
    "cityname":"Bangalore",
    "age":22
};
 
 
//Case 1: How to create an object and how to store information I nobject
 
let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}
 
console.log(student);
 
//Case 2: How to Read specific property value or value?
 
let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}
 
console.log(student);
 
//Read value from object
let v1=student.fname
console.log(v1);
let v2=student["fname"]
console.log(v2);
 
Case 3: How to Add new ProeprtyName and value
 
let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}
 
console.log(student);
 
//Read value from object
let v1=student.fname
console.log(v1);
let v2=student["fname"]
console.log(v2);
 
//Add proeprty name and value
student.age=22
console.log(student);
student["statename"]="Karnataka"
console.log(student);
 
//case 4: How to modify existing  property value
let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}
 
console.log(student);
 
//Read value from object
let v1=student.fname
console.log(v1);
let v2=student["fname"]
console.log(v2);
 
//Add proeprty name and value
student.age=22
console.log(student);
student["statename"]="Karnataka"
console.log(student);
 
//Modify the Existing property value
student.statename="California"
console.log(student);
 
//Case 4: How to delete the property value
let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}
 
console.log(student);
 
//Read value from object
let v1=student.fname
console.log(v1);
let v2=student["fname"]
console.log(v2);
 
//Add proeprty name and value
student.age=22
console.log(student);
student["statename"]="Karnataka"
console.log(student);
 
//Modify the Existing property value
student.statename="California"
console.log(student);
//delete proeprty value
delete student.statename
console.log(student);
 
//Case 5: How to Read all Values
let student={
    "fname":"Santosh",
    "jobname":"Reserarch Analyst",
    "cityname":"Dallas"
}
 
//Read All Values
for(let x in student){
    console.log(student[x]);
}
console.log("----------------------------");
 
//Read All Key and Value
for(let x in student){
    let data=x +" -> "+student[x]
    console.log(data);
}
 
 
//Case 6: How to create Array of object
 
let emplolyee=[
    {
        "id":101,
        "ename":"Adams",
        "job":"Analyst"
    },
    {
        "id":102,
        "ename":"Santosh",
        "job":"Manager"
    },
    {
        "id":103,
        "ename":"Jones",
        "job":"Clerk"
    }
]
//How to Read Values from Each object
console.log(emplolyee[0].id);
console.log(emplolyee[0].ename);
console.log(emplolyee[0].job);
console.log(emplolyee[1].id);
console.log(emplolyee[1].ename);
console.log(emplolyee[1].job);
console.log(emplolyee[2].id);
console.log(emplolyee[2].ename);
console.log(emplolyee[2].job);
 
//Case 7: How to create Nested object and How to read values
let employees={
    "santu":{
        "id":101,
        "ename":"Santosh",
        "job":"Manager"
    },
    "manju":{
        "id":102,
        "ename":"Manjunath",
        "job":"Analyst"
    }
}
//Read Value
console.log(employees.santu.id);
console.log(employees.santu.ename);
console.log(employees.santu.job);
console.log(employees.manju.id);
console.log(employees.manju.ename);
console.log(employees.manju.job);
 
//Case 8: Can we write functions in Object, if yes , how to write and Execute
let employees={
    "id":101,
    "ename":"Santosh",
    "job":"Sales Manager",
    "salary":50000,
    "bonus":function(){
                return (this.salary * 20)/100
            },
    "commission":function(){
                return (this.salary * 5)/100
            },
    "incentive":function(){
                    return(this.salary + this.bonus() + this.commission())
                }
 
}
 
//Read values
console.log(employees.id);
console.log(employees.ename);
console.log(employees.job);
console.log(employees.salary);
console.log(employees.commission());
console.log(employees.bonus());
console.log(employees.incentive());
)}