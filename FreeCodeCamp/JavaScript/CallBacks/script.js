// Callback is a function which is passed as argument to other function 
// callback can play role as synchronous as well as asynchronous  
// Synchronous Callback 
console.log("Method 1  ::: In this we have control whether to call printSum()");
// function printSum(sum){
//     console.log(sum);
// }
// function add(a,b){
//     return a+b;
// }

// let sum = add(3,5);


console.log("Method 2  ::: In this we don't have control whether to call printSum()");
// function printSum(sum){
//     console.log(sum);
// }
// function add(a,b){
//     let sum = a+b;
//     printSum(sum);
// }

// add(3,5);

console.log("Now it is time for callback function ::: ")
// function printSum(sum){
//     console.log(sum);
// }

// function add(a,b,print){
//     addition = a+b;
//     print(addition);
// }

// add(3,4,printSum);




/*
 Asynchronnous CallBack
 */

function printSum(sum){
    console.log(sum);
}

setTimeout(()=>printSum(10),3000);

/**
 * CallBack Hell
 * 
 */


