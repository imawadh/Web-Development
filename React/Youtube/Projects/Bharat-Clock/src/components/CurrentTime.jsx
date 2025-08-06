let now = new Date();
let CurrentTime = ()=>{
    return (
        <center>
            <p className="fs-4"> Current Time is :: {now.getHours()} : {now.getMinutes()} : {now.getSeconds()}</p>
        </center>
    );

}
export default CurrentTime;
