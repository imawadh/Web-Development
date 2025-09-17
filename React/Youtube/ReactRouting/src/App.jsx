import { useRoutes } from "react-router-dom";
import { routes } from "./Routes/AllRoutes";  // 👈 Correct import (case-sensitive)

function App() {
  const element = useRoutes(routes);  // uses AllRoutes.jsx config
  return element;
}

export default App;
