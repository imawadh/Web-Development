// import Heading from "./components/Heading"
import DisplayInput from "./components/DisplayInput"
import DisplayButton from "./components/DisplayButton"
import styles from "./App.module.css"

function App() {
  return <>
    {/* <Heading></Heading> */}
    <div className={styles.calculator} >
      <DisplayInput></DisplayInput>
      <div className={styles.btnContainer}>
        <DisplayButton></DisplayButton>
      </div>
    </div>
  </>
}

export default App
