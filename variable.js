const accountId = 1;
let accountEmail = "test123@gmail.com"
var accountPassword = "123456"
accountcity = "jaipur" 
let accountState // if there is no assignment to variable ,then value will be undefined

//accountId= 2 //assignment to const is not allowed
accountEmail = "test0914@gmail.com"
{
   let accountEmail1 = "test1234@gmail.com"
   var accountPassword = "abs1123"
}
console.log(accountId)
//console.log(accountEmail1) //cannot access the accountEmail1 as accountEmail1 is in block scope
console.log(accountPassword)
console.log(accountcity)
console.log(accountState)

console.table([accountEmail,accountId,accountPassword,accountcity,accountState])


/*
Prefer not to use var
because issue with block scope
*/
