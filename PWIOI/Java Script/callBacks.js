

function hof(callback){
    console.log("I am HOF and calling Callback Function .... ");
    setTimeout(()=>{
        callback();
    },10000);
    
}

function callback(){
    console.log("I am Callback function  and I am called now using set_time_out");
}

hof(callback);