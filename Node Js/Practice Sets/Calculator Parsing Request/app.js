const http = require('http');
const handleCalculator = require('./handling-calculator')

const server = http.createServer(handleCalculator);

const port = 3000;
server.listen(port,()=>{
    console.log(`Server starting at :: http://localhost:${port}`)
});
