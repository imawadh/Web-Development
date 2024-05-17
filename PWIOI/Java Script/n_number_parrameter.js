function sum(){
    sum = 0
    for (let i =0; i<arguments.length; i++)
    {
        sum +=arguments[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5,6))