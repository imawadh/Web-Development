// Here we will have all the required pages imported so that it can displayed easily ...


const route = (req,res) => {
    if(req.url==='/' && req.method=='GET'){
        console.log('Welcome to home page :: ...  ')
    }
}

module.exports =  route;