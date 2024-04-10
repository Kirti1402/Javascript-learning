// singleton => created constructor Object.create

//object literals
const mySym = Symbol("test");
const user = {
[mySym]:"test123",
name:"kirti",
office:"Mindfire",
0:"xyz",
"full name": "Kirti Singh"
}

console.log(user.name)
console.log(user["full name"])