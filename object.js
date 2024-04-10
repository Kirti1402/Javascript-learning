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

const obj1 = {name:"swati",email:"test123@gmail.com"}
const obj2 = {name:"om",phoneNo:"9780"}
const obj3 ={obj1,obj2}//{ obj1: { name: 'swati' }, obj2: { name: 'om' } }
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj3)
console.log(obj4)//{ name: 'om', email: 'test123@gmail.com', phoneNo: '9780' }
const obj5 = {...obj1,...obj2}
console.log(obj5)//{ name: 'om', email: 'test123@gmail.com', phoneNo: '9780' }

const SocialUsers=[
    {
        id:1,
        app:"facebook"
    },
    {
        id:2,
        app:"instagram"
    },
    {
        id:3,
        app:"pinerest"
    }
]

console.log(SocialUsers[0])//{ id: 1, app: 'facebook' }

console.log(Object.keys(SocialUsers[0]));//[ 'id', 'app' ]
console.log(Object.values(SocialUsers[0]));//[ 1, 'facebook' ]
console.log(Object.entries(SocialUsers[0]));//[ [ 'id', 1 ], [ 'app', 'facebook' ] ] converted to array
console.log(SocialUsers[1].hasOwnProperty('id'))//true