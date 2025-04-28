const delivery = (resolve,reject)=>{
    // console.log("Thank You for shoping with us")
    const delivery =  false;
    if(delivery){
        resolve("Order will be delivered by today.")
    }
    else{
        reject("Delay, Delivery ")
    }
    
}

const delivery1 = new Promise(delivery)

delivery1.then(()=>{
    console.log("Thank You !")
})
delivery1.catch(()=>{
    console.log("Sorry")})
