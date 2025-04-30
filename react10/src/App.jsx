// src/App.jsx
import React, { useRef } from "react";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import { increment, incrementByValue } from "./store/CounterSlice/CounterSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function handleIncrementByValue() {
    const value = parseInt(inputRef.current.value, 10);
    if (!isNaN(value)) {
      dispatch(incrementByValue(value));
    }
    inputRef.current.value = "";
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-gray-700">
            Welcome to Redux Toolkit App
          </h1>
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="number"
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            />
            <button
              onClick={handleIncrementByValue}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              IncrementByValue
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
