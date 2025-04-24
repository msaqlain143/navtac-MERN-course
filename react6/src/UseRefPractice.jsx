import React from "react";
import { useEffect, useRef, useState } from "react";
const UseRefPractice = () => {
  const inputRef = useRef(null); // DOM reference
  const timerRef = useRef(null); // Stores timer ID
  const prevCount = useRef(0); // Tracks previous count

  const [count, setCount] = useState(0);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus input field
  };

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    prevCount.current = count; // Update previous value
  }, [count]);
  return (
    <div>
      <div className="p-6 text-center font-sans">
        <h1 className="text-xl font-bold mb-4">🔁 useRef Demo</h1>

        <input
          ref={inputRef}
          className="border px-2 py-1"
          placeholder="Click 'Focus'"
        />
        <br />
        <br />
        <button
          onClick={handleFocus}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Focus Input
        </button>

        <div className="mt-6">
          <h2 className="text-lg">🧮 Count: {count}</h2>
          <p>🕘 Previous Count: {prevCount.current}</p>

          <div className="mt-3">
            <button
              onClick={startTimer}
              className="bg-green-500 text-white px-4 py-1 mr-2 rounded"
            >
              Start
            </button>
            <button
              onClick={stopTimer}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRefPractice;
