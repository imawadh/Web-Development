const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('<HTML>')
        res.write('<Head>')
        res.write('<Title> Fill the necessary form </Title>')
        res.write('</Head>')
        res.write('<body>')
        res.write('<h1>Hello Form</h1>')
        res.write('<a href="/form">Link to from Page</a>');
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    }
    else if(req.url==='/form'){
        res.setHeader('Content-type','text/html');
        res.write('<HTML>')
        res.write('<Head>')
        res.write('<Title> Fill the necessary form </Title>')
        res.write('</Head>')
        res.write('<body>')
        res.write('<h1>Hello Form</h1>')
        res.write('<form action="/submit-details" method="POST">')
        res.write('<label for="useranme"> User Name </label>')
        res.write('<input type="text" name="username" placeholder="Enter your username" <br> <br>')

        res.write('<label for="gender"> Select Gender : </label> <br>')
        res.write('<input type="radio" id="male" name="gender" value="Male">')
        res.write('<label for="male"> Male </label> <br>')

        res.write('<input type="radio" id="female" name="gender" value="Female">')
        res.write('<label for="female"> Female </label> <br> <br>')

        res.write('<button type="submit">Submit</button><br>')
        res.write('</form>')
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    }
    else if(req.url.toLocaleLowerCase()==="/submit-details" && req.method==="POST"){
        fs.writeFileSync('user-deatils.txt','Awadh Kishor Singh');
        res.statusCode = 302; // it means found or moved temporarily
        res.setHeader('Location','/'); // Settin the location where to redirect ... 
        res.end();
    }
    // console.log("Hello Server Started");
    // process.exit();
})


const port = 3000;
server.listen(port,()=>{
    console.log(`The current local host is http://localhost:${port}`);
})