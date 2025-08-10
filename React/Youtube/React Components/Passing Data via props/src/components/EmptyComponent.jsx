function EmptyComponent({foodItems}){
    //let foodItems = ["Dal","Chawal","Sabji","Roti"]

    // let foodItems = []
    return <>
        {foodItems.length===0 ? "I am Hungry" : null }
    </>

}
export default EmptyComponent;