import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isToggled) {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setData(null); // Clear data when toggled off
    }
  }, [isToggled]);

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={() => setIsToggled(!isToggled)}
        className="mb-6 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-md"
      >
        {isToggled ? "Hide Data" : "Show Data"}
      </button>

      {isToggled && data && (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 border border-gray-200 transition-all duration-300">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
            📦 Fetched Data
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">🆔 ID:</span>
              <span>{data.id}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">📝 Title:</span>
              <span className="text-right">{data.title}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">✅ Completed:</span>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  data.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {data.completed ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toggle;
