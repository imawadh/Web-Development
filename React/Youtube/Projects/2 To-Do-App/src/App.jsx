import AppHeading from "./Components/AppHeading";
import AppTaskComponent from "./Components/AddTaskComponent";
import TodoItems from "./Components/todoItems";
function App(){
  const Items = [
    {
    "todoDate" : "4/10/24",
    "todoName":"Buy Milk .... "
    },
    {
    "todoDate" : "4/10/24",
    "todoName":"Go to college ... ."
    },
    {
    "todoDate" : "4/10/24",
    "todoName":"Back to Home  ... ."
    },
    {
    "todoDate" : "4/10/24",
    "todoName":"meet friends  ... ."
    }
  ]

  return (

    <center>
      <AppHeading></AppHeading>  
      <AppTaskComponent></AppTaskComponent>
      
      {/* <TodoItem todoDate="4/10/24" todoName="Buy Milk"></TodoItem>
      <TodoItem todoDate="4/10/24" todoName="Go to college "></TodoItem> */}

      <TodoItems items={Items}></TodoItems>



    </center>

  );
}
export default App; 