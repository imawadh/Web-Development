const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('content-type','text/html')
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Page Title</title>');
        res.write('</head>');
        res.write('<body> This is the home Page ... </body>')
        res.write('</html>');
        res.end(); 
    }else if(req.url==='/about'){
        res.setHeader('content-type','text/html')
        res.write('<html>');
        res.write('<head>');
        res.write('<title>About Title</title>');
        res.write('</head>');
        res.write('<body> Exploring our About  pages ..  </body>')
        res.write('</html>');
        res.end(); 

    }else{
        res.setHeader('content-type','text/html')
        res.write('<html>');
        res.write('<head>');
        res.write('<title>About Title</title>');
        res.write('</head>');
        res.write('<body> Exploring our Other  pages ..  </body>')
        res.write('</html>');
        res.end(); 
    }
    
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server Starting at http://localhost:${port}`)
});