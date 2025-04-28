function divide1(a,b){
    console.log(a/b);
}

divide1(3,0);
divide1(3,3);

function devideWithErrorHandling(a,b){
    try{
        if(b==0)
            throw new Error("Cann't Divide by zero");
        console.log(a/b)
    }
    catch(error){
        console.log(error)
    }
}

devideWithErrorHandling(3,0)
devideWithErrorHandling(3,3)