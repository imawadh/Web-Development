function doubleIt(x){
    return x*2;
} // -->Normal function

const doubleValue =  (x)=>{
    return x*2;
}// --> arrow  function


console.log("Arrow function :: ",doubleValue(100));
console.log("Normal function :: ",doubleIt(26));


const exeFunction = (resolve,reject)=>{
    isCarReady = false;
    if(isCarReady){
        resolve("Car is Ready You Come... ")
    }
    else{
        reject("Car is not Ready ... ")
    }
}

const promise1 = new Promise(exeFunction);


// If promise is completed 
console.log(promise1.then((message)=>console.log(" I am Coming ... ")));

// If promise is not completed 
console.log(promise1.catch((message)=>console.log(" I am not Coming ... ")));


