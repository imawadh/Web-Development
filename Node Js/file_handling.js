const fs = require('fs');
// or 
// import fs from 'fs';

// fs.writeFile(fileName,data,hof functionoooop0o00)
fs.writeFile('output.txt',"Rew3riting in File", (err)=>{
    if(err) console.log("Error Occured")
    else console.log("File Written Suceessfully.");
    
})

const data =  fs.readFile('output.txt')
console.log(data)