// Storing a function value to a variavble

let hello = function (){
    console.log("Hello");
}

hello()

// Set Function as object Properties 

const objectName={
    name:"Bob",
    geeet:function(){
        console.log("Bob Here")
    }
}

objectName.geeet()


// Store Function in array

const functionArray = [
    function f1(){console.log("Hello 1");},
    function f2(){console.log("Hello 2");},
    function f3(){console.log("Hello 3");},
    function f4(){console.log("Hello 4");}
] 

console.log(functionArray);

console.log(functionArray[0]());


// Various Return Type of Function --> number,string,function as well


// Function returing a function


// Method 1::
// function f2(){
//     console.log("I am the returned function");
// }

// function f1(){
//     console.log("I am returning a function");
//     return  f2()
// }

// f1();


// Method 2::


function f1(){
    console.log("I am returning a function");

    function f2(){
        console.log("I am the returned function");
    }
    f2();
}
f1()



//  Passing Function as a Argumrnt 

function parameterisedFunction(){
    console.log("Hi I am a function who will be used as parameter to a function")
}


function functionThatAcceptFunctionAsAArgument(FunctionAsaParamter){
    console.log("functionThatAcceptFunctionAsAArgument Called ... ")
    FunctionAsaParamter();

}
functionThatAcceptFunctionAsAArgument(parameterisedFunction)