import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(15);


  const addValue = ()=>{
    console.log("Value added ... ");
    if(counter<=19){
      counter++;
      console.log(counter);
      setCounter(counter);
    }
  }

  const decreaseValue =()=>{
    if(counter>=1){
      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>
        Awadh and Code with Awadh 
      </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value </button>
    </>
  )
}

export default App
