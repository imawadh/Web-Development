import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import ClockSlogan from "./components/ClockSlogan";
function App(){
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </div>
  );
}
export default App;