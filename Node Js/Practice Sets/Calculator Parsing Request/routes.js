
const home = require('./home')
const result = require('./result')

function handleRoutes(req,res){
    if(req.method==='GET' && req.url==='/'){
        home(req,res);
    }
    else if (req.method==='POST' && req.url==='/result'){
        result(req,res);
    }
    
}

module.exports = handleRoutes;