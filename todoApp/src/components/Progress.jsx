import React from "react";

const Progress = ({ progress }) => {
  return (
    <div className="flex flex-col items-center space-y-4 my-6">
      {/* Progress Bar with styling */}
      <div className="relative w-56">
        <progress
          className="progress progress-secondary w-full h-8 rounded-lg"
          value={progress}
          max="100"
        ></progress>
        {/* Progress Percentage Text Inside */}
        <span
          className="absolute inset-0 flex items-center justify-center font-semibold text-lg text-white"
          style={{ left: "0", right: "0", top: "0", bottom: "0" }}
        >
          {progress}%
        </span>
      </div>
      {/* Optional Message */}
      {progress === 100 ? (
        <span className="text-green-500 font-semibold text-xl">
          Task Complete!
        </span>
      ) : (
        <span className="text-gray-600 font-medium">Progressing...</span>
      )}
    </div>
  );
};

export default Progress;
