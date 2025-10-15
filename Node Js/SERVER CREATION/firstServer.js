const http = require('http');

const server = http.createServer((req,res)=>{
        console.log("Server Created Sucessfully");
        console.log("Request Object   :: "); 
        console.log(req);
        console.log("Response Object :: ");
        console.log(res);
        process.exit(); // stops event loop 
    }
);


const port = 3000;
server.listen(port,()=>{
    console.log(`Server Starting at http://localhost:${port}`)
})