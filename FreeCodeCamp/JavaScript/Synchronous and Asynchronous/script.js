/**
 * Asynchronous Style of programming 
 */

/*
 Synchronous means lile by execcution of code and then next line will not be executed unless the current line execution is finished ... 
 Javascript is Synchronous Programming Language ..
*/
console.log("Synchronous Style ");

console.log("one")
console.log("two")
console.log("three")




/**A
 * Asynchronous Style of Progaramming 
 */
/*
 Due to synchronous programming, sometimes imp instructions get delayed in execution because of the previous instruction time consumption which might delay in UI. Then came Asynchronous Programming ....
  
 Asynchrounous Programming executes the next instruction even if the current line/ block of code is not executed and does block the flow.
 */


console.log("Asynchronous Style ")
console.log("four");
console.log("five");
setTimeout(()=>{
    console.log("Hello, I am in Synchronous Style ")
},2000);
/**
 * Even though six and seven are written below the setTimeout() but will executed because of asynchronous style i.e: it need not to wait for the above function execution time completly .... 
 */
console.log("six");
console.log("seven");
