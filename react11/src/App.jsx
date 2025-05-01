import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layouts from "./Layouts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layouts />
      <h1>home Page</h1>
    </>
  );
}

export default App;
