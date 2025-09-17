const http = require("http");
const students = require("./students")
const port = 5000;

const server = http.createServer((req,res)=>{
    
});

server.listen(port,()=>{
    console.log("Sereer Got Started....");
})