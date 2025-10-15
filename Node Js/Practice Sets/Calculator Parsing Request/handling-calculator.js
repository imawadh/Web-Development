const route = require('./routes')

const handleCalculator = (req,res) =>{
    console.log(req.method);
    route(req,res);

}

module.exports = handleCalculator;