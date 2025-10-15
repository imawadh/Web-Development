const http = require('http');

const server1 = http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.setHeader('content-type','text/html')
        res.write('<HTML>')
        res.write('<Head>')
        res.write('<Title> Home Page </Title>')
        res.write('</Head>')
        res.write('<body>')
        res.write('<a href="/men">Men</a>')
        res.write('<a href="/women">Women</a>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<a href="/carts">Carts</a>')
        res.write('<h1>This is Home Page</h1>')
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    }
    else if(req.url==='/men' && req.method==='GET'){
        res.setHeader('content-type','text/html')
        res.write('<HTML>')
        res.write('<Head>')
        res.write('<Title> Men Page </Title>')
        res.write('</Head>')
        res.write('<body>')
        res.write('<a href="/">Home</a>')
        res.write('<a href="/women">Women</a>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<a href="/carts">Carts</a>')
        res.write('<h1>This is Men Page</h1>')
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    }
    else if(req.url==='/women' && req.method==='GET'){
        res.setHeader('content-type','text/html')
        res.write('<HTML>')
        res.write('<Head>')
        res.write('<Title> Women Page </Title>')
        res.write('</Head>')
        res.write('<body>')
        res.write('<a href="/">Home</a>')
        res.write('<a href="/men">Men</a>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<a href="/carts">Carts</a>')
        res.write('<h1>This is Women Page</h1>')
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    }
    else if(req.url==='/kids' && req.method==='GET'){
        res.setHeader('content-type','text/html')
        res.write('<HTML>')
        res.write('<Head>')
        res.write('<Title> Kids Page </Title>')
        res.write('</Head>')
        res.write('<body>')
        res.write('<a href="/">Home</a>')
        res.write('<a href="/men">Men</a>')
        res.write('<a href="/women">Women</a>')
        res.write('<a href="/carts">Carts</a>')
        res.write('<h1>This is KIds Page</h1>')
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    }
    
    else if(req.url==='/carts' && req.method==='GET'){
        res.setHeader('content-type','text/html')
        res.write('<HTML>')
        res.write('<Head>')
        res.write('<Title> Cart Page </Title>')
        res.write('</Head>')
        res.write('<body>')
        res.write('<a href="/">Home</a>')
        res.write('<a href="/men">Men</a>')
        res.write('<a href="/women">Women</a>')
        res.write('<a href="/kids">Kids</a>')
        res.write('<h1>This is Cart Page</h1>')
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    }
})

const port = 3000;
server1.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})