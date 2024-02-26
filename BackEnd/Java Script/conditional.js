var number = 20
if(number%2 == 0)
{
    console.log(number,"is Even")
}
else
{
    console.log("Odd")
}

// else has no exitence in real progrmming and its existence comes only when if condition comes into picture

// Ternary operation 
number%2== 0 ? console.log("Even") : console.log("Odd")


/**
 * Nested Conditional
 * 
 */
var a =-2
if(a>0)
{
    if(a>5)
    {
        console.log("0 -- 5")
    }
    else{
        console.log("0 --- 6")
    }
}
else{
    console.log(0)
}
a>0 ? a>5 ? console.log("0 -- 5") : console.log("0 --- 6") : console.log(0)


// Switch - Case Statement

var name = "Aditya"
switch (name)
{
    case "Awadh":
        console.log("Awadh Kishor Singh")
        break
    case "Aditya":
        console.log("Aditya Gupta Azamgarh")
        break
    case "Dinkar":
        console.log("Bihar Thakur Saheb")
        break;
    default:
        console.log("Name not found")
}




