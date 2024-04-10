// singleton => created constructor Object.create

//object literals
const mySym = Symbol("test");
const user = {
[mySym]:"test123", // if you dont use [mysym] type of will string 
name:"kirti",
office:"Mindfire",
0:"xyz",
"full name": "Kirti Singh"
}

console.log(user.name)//Dot notation is commonly used when the property name is a valid JavaScript identifier
console.log(user["full name"])
//Bracket notation is necessary when the property name: contains special characters or starts with a digit,Is stored in a variable,Is dynamically generated.

user.name = "Kittu"
console.log(user)

// Object.freeze(user)// to freeze he Object
// user.name = "Kittuda"
// console.log(user)

user.greeting =  ()=>{
    console.log("hello I am greeting function")
}

console.log(user.greeting)// will return reference output: [Function (anonymous)]
console.log(user.greeting())
// output:hello I am greeting function
//undefined
//When a function in JavaScript doesn't have a return statement, it implicitly returns undefined.