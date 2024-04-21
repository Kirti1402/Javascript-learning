const user  ={
    userName:"xyz",
    price:999,
    welcome :function(){
        console.log("welcome",this.userName)
    }
}
user.welcome()

console.log(this) // empty object {}  and inside browser we have window object

// function learn() {
//     console.log(this)
// }

//learn()

const learnArrow = ()=>{
    let userName = "Ragnarok"
    console.log(this.userName)
}

learnArrow()


const learnArrowImplicitReturn = () => 1+2 // implicit return without bracket 
console.log(learnArrowImplicitReturn())

const objectReturn  = () => ({userName:"test"}) // for object need to include curly braces

console.log(objectReturn())
