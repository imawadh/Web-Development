const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req);
    res.setHeader('content-type','text/html')
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Page Title</title>');
    res.write('</head>');
    res.write('<body> This is the page Page ... </body>')
    res.write('</html>');
    res.end(); // No more thing to write end the rseponse ... 
    //process.exit();
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server Starting at http://localhost:${port}`)
});