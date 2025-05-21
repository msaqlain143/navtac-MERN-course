import { useState } from "react";
import RegisterForm from "./components/register/RegisterForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default App;
