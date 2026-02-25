

let student= {

"id":1,
"name":"John Doe",
"age":20


}

//Accessing all the properties of the object
console.log(student)
//Accessing individual properties of the object
console.log(student.name)       
console.log(student.id)
console.log(student.age)
console.log(student["name"])

//adding a new property to the object

student.marks=85
console.log(student)
student["city"]="New York"
console.log(student)

//modifying the existing property of the object
student.marks=90
console.log(student)

//deleting a property from the object
delete student.id
console.log(student)