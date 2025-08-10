import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import styles from "./App.module.css";

function App() {
    return <> 
      <h1>Hello World</h1>
      <ul className="list-group">
        <li className={`list-group-item ${styles.item}`}>Item  1</li>
        <li className={`list-group-item ${styles.item}`}>Item  2</li>
        <li className={`list-group-item ${styles.item}`}>Item  3</li>
        <li className={`list-group-item ${styles.item}`}>Item  4</li>
        <li className={`list-group-item ${styles.item}`}>Item  5</li>
      </ul>
    </>
}

export default App
