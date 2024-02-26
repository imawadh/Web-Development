/**
 * function with no return 
 */
var hello = () => console.log("Hello Students !")
hello()

/**
 * function with argument and return statement 
 */

var sum = (a,b) => {
    return a+b
 } // no need to write return statement

console.log(sum(12,34))

var process = (a,b) => 
{
    console.log("Processing --- ")
    console.log(a*b)
    return a+b
    //return a+b , a*b if we write this we will get the last value of it.

} 

console.log(process(2,4))


/**
 * if this arrow fuction has some adavntage of not containing more lines of code 
 * so it there should be some advantage to normal function as well and that is basically no arguments fetaure is there in the arrow function while normal functions has that faeture if arguments 
 * 
 * 
 */


