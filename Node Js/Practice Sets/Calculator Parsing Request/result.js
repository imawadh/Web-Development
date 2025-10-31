const result = (req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<HTML>')
    res.write('<Head>')
    res.write('<Title> Sum Page :  </Title>')
    res.write('</Head>')
    res.write('<body>')

    // Reading data in Chunks 
    const body = []
    req.on("data",(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    })

    // Parsing the data 
    let num1,num2;
    req.on("end",()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const params = new URLSearchParams(parsedBody);
        // const bodyObj = {};
        // for(const[key,val] of params.entries()){
        //     bodyObj[key] = val;
        // }
        // or
        const bodyObj = Object.fromEntries(params);
        num1 = bodyObj['num1'];
        num2 = bodyObj['num2'];
        console.log(bodyObj);
        console.log(num1);
        console.log(num2);
    
        res.write(`<p>The sum of ${num1} and ${num2} is : ${parseInt(num1)+parseInt(num2)}.</p>`)
        
        res.write('</body>')
        res.write('</HTML>')
        res.end();
    })


}

module.exports = result; 