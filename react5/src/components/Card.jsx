import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-gray-200 transition-all duration-300">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          📦 Fetched Data
        </h2>

        <div className="space-y-4 text-gray-700">
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
    </div>
  );
};

export default Card;
