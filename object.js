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

console.log(user.name)
console.log(user["full name"])

user.name = "Kittu"
console.log(user)

Object.freeze(user)// to freeze he Object
user.name = "Kittuda"
console.log(user)