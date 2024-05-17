function ascii(num)
{
    return String.fromCharCode(num+96,num+64)
}
let a = ascii(15)
console.log(a)