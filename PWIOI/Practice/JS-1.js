console.log("Hello World !");

console.log(a); // it would give undefined value 
var a =  12;
console.log(a);


// console.log(b); // It would throw an error 
let b = 15;
console.log(b);


// console.log(c); // It would throw an error 
const c = 20;
console.log(c);
// c = 57; const variable can't be reinitialised 
console.log(c);


let name = "John Doe";
let age =  34;
let isStudent = true;
let x;
let y = null;
let largeNumber = 1234567898765432123456787654321n;
console.log("Name :: ");
console.log(name);
console.log(age);
console.log(isStudent);
console.log(x);
console.log(y);
console.log(largeNumber);


let m =5;
let n = "5";

console.log(n==m);// compares only values 
// console.log(n=5);
console.log(n===m); // compares values and type as well


// Negative of == is !=
// Negative of === is !==

console.log(n!=m);
console.log(n!==m);


// Type of Function in JavaScript 
console.log(typeof(n));
console.log(typeof(m));



// Function in Js uses Camel Case 
function print(){
    console.log("Hello World");
    return 1;
}

print();