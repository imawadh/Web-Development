const http = require("http");
// import http from http;
const port = 3456;
const server = http.createServer((req,res)=>{
    // logic to request and response back the request 
    if(req.url==="/" && req.method==="GET"){
        res.writeHead(200);
        res.end("Welcome to home Page")
    }
    else if(req.url==='/about' && req.method==="GET"){
        res.writeHead(200);
        res.end("Welcome to About Us  Page")
    }else{
        res.writeHead(404);
        res.end("Page Not Found .... ")
    }
})

console.log("Imported Http ");
server.listen(port,()=>{
    console.log(`Server has started running on Port number ${port}`);
})
