// Self made module 
const route = require('./route')


// External Module 
const http = require('http')

const server = http.createServer(route)

const port  = 3000;
server.listen(port,()=>console.log(`The server is http://localhost:${port}`))