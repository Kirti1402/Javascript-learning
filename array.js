//array is an object used for storing multiple data under a single variable name and array have method to perform operation on it

// array are resizable , follows shallow copy , can be access by non negative integer

// array constructor used to create array => whether you use new or not with Array() its going to create

const array= new Array(2) // parameter inside Array is tell you the length of element 

console.log(array) // [ <2 empty items> ]

console.log(array.length) //2
console.log(array[0]) //undefined

array[0] = "hello"// 'hello', <1 empty item> 
array[1] = "morning"
array.push("hi")// will add element at the end of the array,  'hello', <1 empty item>, 'hi' 

console.log('at(0) ',array.at(0)) // return a value at respective index

const concatArray = array.concat([1,2,3,4]) // merge two array does not change existing array but create new array
console.log(concatArray);// [ 'hello', 'morning', 'hi', 1, 2, 3, 4 ]
console.log(array);//[ 'hello', 'morning', 'hi' ]

console.log("copy within",array.copyWithin(0,1,3))//array.copyWithin(target, start, end), Copies the elements starting from index 1 to index 3 (exclusive) to index 0
//[ 'morning', 'hi', 'hi' ]

const iterator1 = array.entries(); //return new array iterator object that contains the key/value pairs for each index in the array.
console.log(iterator1.next().value);//[ 0, 'morning' ]
console.log(iterator1.next().value);//[[ 1, 'hi' ]

//The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const array1 = [1, 30, 39, 29, 10, 13,45];
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array1.every(isBelowThreshold));//false
