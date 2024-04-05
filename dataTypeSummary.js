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