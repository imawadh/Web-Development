const http = require('http');

const server = http.createServer((req,res)=>{
        console.log("Server Created Sucessfully");
        console.log("Request Object   :: "); 
        console.log(req.url,req.method, req.headers);
        // process.exit();
    }
);


const port = 3000;
server.listen(port,()=>{
    console.log(`Server Starting at http://localhost:${port}`)
})