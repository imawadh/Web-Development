/**
 * variables , functions , objects 
 * 
 * 
 * global scope 
 * block scope ----- local scope 
 * function scope ---- local scope 
 * 
 */

// What is global scope 

var name = "Awadh Kishor Singh"
console.log(name)// jab bhi koi variable funxction aur block of code ke bahar define karte hai to wo global scope me aata hai

//What is local Scope 

function func()
{
    var num =55
    console.log(num)   
}
// console.log(num) this will throw error



// Block scope 

{
    var x = 55 // It is not block scope 
    let y = 98 // Let keyword allows block scope 
    console.log(x) 
    console.log(y)
}

console.log(x)
//console.log(y)
