function App(){
  let foodItems = ["Dal","Bhat","Roti","Sabji"];
  return <>
    <ul>
      {foodItems.map((item) =>(
        <li key={item}>{item}</li>
      ))}
      {/* {
        foodItems.forEach(element => {
          <li>{element}</li>

          console.log(element);
        })
      } */}
    </ul>
  </>
}
export default App;