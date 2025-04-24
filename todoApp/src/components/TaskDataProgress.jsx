import React from "react";

const TaskDataProgress = ({ progress }) => {
  return (
    <div className="flex flex-col items-center space-y-6 my-8">
      <div
        className="radial-progress text-primary border-4 border-blue-500 rounded-full"
        style={{ "--value": progress } /* as React.CSSProperties */}
        aria-valuenow={progress}
        role="progressbar"
      >
        {progress}%
      </div>
    </div>
  );
};

export default TaskDataProgress;
