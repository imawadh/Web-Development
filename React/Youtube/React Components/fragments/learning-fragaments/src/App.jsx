import React  from "react";
function App(){
  // return (
  //   <div className="mt-3 ms-3">
  //     <h3>List of cricket players ::: </h3>
  //     <ul>
  //       <li>Sachin Ramesh Tendulkar</li>
  //       <li>Virat Kohli</li>
  //       <li>Sunil Gavaskar</li>
  //       <li>Kapil Dev</li>
  //     </ul>
  //   </div>
  // );


  // Method 2 
  // return <>
  //   <h3>List of cricket players ::: </h3>
  //       <ul>
  //         <li>Sachin Ramesh Tendulkar</li>
  //         <li>Virat Kohli</li>
  //         <li>Sunil Gavaskar</li>
  //         <li>Kapil Dev</li>
  //       </ul>
  //   </>;


  // Method 3
  return <React.Fragment>
            <h3>List of cricket players ::: </h3>
            <ul>
              <li>Sachin Ramesh Tendulkar</li>
              <li>Virat Kohli</li>
              <li>Sunil Gavaskar</li>
              <li>Kapil Dev</li>
            </ul>
          </React.Fragment>

}
export default App;
/**
 * If we want to return multiple things on our UI, we can do it three ways 
 * 1. Enclose all in a single element ::-> It is not good because it uses extra element to present and takes our original content one level down..\
 * 
 * 2. <> content </> :: Enclosing everything in openeing and closing would automatically create a raect fragment and it is directly loaded which another other heirarchy
 * 
 * 3. <React.Fragment> content </React.Fragment> ::  Replacing everything at content would automatically create a raect fragment and it is directly loaded which another other heirarchy
 */