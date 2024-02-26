/**
 * reuse logic to solve a problem with differnt values 
 * 
 * 
 */
function hello_student()
{
    console.log("Hello Bachho!")
}
/***
 * here function is a keyword 
 * hello_student is the name of the function
 * ()--- Parameter box wher we will pass the arguments 
 * and {
 * console.log()
 * } --- is the body of the function.
 * 
 * function hello_student()
{
    console.log("Hello Bachho!")
}

 */
hello_student()

// Parmeter / Dummy values i.e a and b and when we pass value to a nd b these are called argument
function sum(a=5,b=4)// here b = 4 is the default value 
{
    return a+b;
}
var c = sum(4,5)
console.log(c)
console.log(sum(12,56))
/*
console.log(sum(6))
if we pass this we get NaN so we need to give default value 

*/

console.log(sum(6))
console.log(sum())


// Forced Argument in the function --- isme argument object ko value pata hoga 

function func()
{
    console.log(arguments)
}
func(1,2,3,3,44,4,45,56,7,8,9,0)

// Arrow Function ---  smaller syntax to get more 





