let hello = "hello"
hello += "world"
console.log(hello)

// let namE = prompt("What is your Name :: ","Guest");
// if(namE === null){
//     console.log("User entered")
// }
// else{
//     console.log("User cancelled")
// }
let namE = prompt("What is your Name ::", "Guest");

if (namE === null) {
    console.log("User cancelled");
} else {
    console.log("User entered");
}
