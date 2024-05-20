// Arrow function was made to convert normal variable into function 

let name = () => {
    console.log("Nishchay")
}
name()

let sum = (x,y) =>{
    const ans = x+y;
    return ans
}
console.log(sum(90,76))


let ascii = (num) =>{
    return String.fromCharCode(num+64)
}
console.log(ascii(3))