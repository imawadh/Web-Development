const jsonString = `{
"name" : "Jasmine",
"height" : 20,
"color" : "red"
}`;

function parseJSON(inputString){
    try{
        constplantObject = JSON.parse(inputString);
    }
    catch(error){
        console.log("JSON Parse Error ")
    }; 
}

parseJSON(jsonString);



// convert an objcet to a string 
// const plantObj = JSON.parse(jsonString);
// console.log(plantObj)
// console.log(plantObj.name)


