// primitive data type are call e value , reference is not shared and its changes is stored in copy 

//7 type : String, Number, Boolean , null, undefined

//reference type or non - primitive data type : array , Object, functions


const heros = ["IronMan", "Hulk", "Thor", "Groot",]
let heroDetail = {
    name: "Groot",
    type:"marvel"
}

const myFunction = ()=>{
    console.log("hello")
}

console.log("array", typeof heros) // Object
console.log("object", typeof heroDetail) //Object
console.log("myFunction", typeof myFunction) //function Object


//****************memory in javascript */

// stack => primitive call by value
//heap => non-primitive call by reference 

let a =  "hello"

let b = a

console.log(a, b)

b = "sql"

console.log(a,b)

let user1 = {
    name:"abc",
    id:123
}

let user2 = user1

console.log(user1, user2)

user2.name = "xyz"
console.log(user1, user2)