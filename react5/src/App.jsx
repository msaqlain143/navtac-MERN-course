import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Toggle from "./components/Toggle";
import Timer from "./components/Timer";
import Events from "./Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Timer />
      <Toggle />
      <Events /> */}
    </>
  );
}

export default App;
