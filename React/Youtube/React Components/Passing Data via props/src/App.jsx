import EmptyComponent from "./components/EmptyComponent";
import RenderItems from "./components/RenderItems";

function App(){
  let foodItems = ["Dal","Chawal","Sabji","Roti"]
  //let foodItems = []
  return <>
    <EmptyComponent foodItems={foodItems}></EmptyComponent> 
    {/* When it returns I am hungry or null the above line will terminate only not the complete file think for a while why ???   */}
    <ul>
      {
        foodItems.map(item=>(
          <RenderItems item={item}></RenderItems>
        ))
      }
    </ul>
  </>
}
export default App;