let age = 33

console.log(typeof age)

let age1 = "33"
let age1Convert = Number(age1)
console.log(age1Convert)
console.log(typeof age1Convert)


let score = "33abc" 
let scoreConversion = Number(score) //idealy js schould not convert this input to number but there is no strict check
console.log(typeof scoreConversion) // number
console.log(scoreConversion) //NAN => as input is non numric string and it cant be parsed so result is NAN

let bool = 1;

let boolConversion = Boolean(bool)
console.log(typeof boolConversion)
console.log(boolConversion)

let emptyString = ""
let emptyStringConversion = Boolean(emptyString)
console.log(typeof emptyStringConversion)
console.log(emptyStringConversion)

let string = "33"
let stringConversion= String(string)
console.log(typeof stringConversion)
console.log(stringConversion)