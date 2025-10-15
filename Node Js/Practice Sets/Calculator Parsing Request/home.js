const home = (req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<HTML>')
    res.write('<Head>')
    res.write('<Title> Fill the necessary form </Title>')
    res.write('</Head>')
    res.write('<body>')

        res.write('<form action="/result" method="POST">')
        res.write('<label for="num1"> Num 1 :  </label>')
        res.write('<input type="number" name="num1" placeholder="Enter Number 1 " <br> <br>')
        res.write('<label for="num2"> Num 2 :  </label>')
        res.write('<input type="number" name="num2" placeholder="Enter Number 2  " <br> <br>')
        res.write('<button type="submit">Submit</button><br>')
        res.write('</form>')
        
    res.write('</body>')
    res.write('</HTML>')
    res.end();

}

module.exports = home;
