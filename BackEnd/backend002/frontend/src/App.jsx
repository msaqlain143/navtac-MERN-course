import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  fetch("http://localhost:4040/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Handle the data received from the backend
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  return (
    <>
      <h1>Full Stack Development Practice :</h1>
    </>
  );
}

export default App;
