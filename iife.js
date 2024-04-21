//immediately invoked function expression

function chai() {
    console.log("DB Connected")
}

chai(); // function expression
/* finding (why I added a semicolon after function expression
ASI and Function Calls: JavaScript's ASI feature automatically inserts semicolons at the end of lines if they are missing. 
However, ASI doesn't always work as expected, especially when it comes to function expressions followed by function calls on separate lines. 
In such cases, ASI may not insert semicolons where you expect, leading to errors.)
    */
(function iife() {
    console.log("iife")
})()

/*
output :
DB Connected
iife 
*/