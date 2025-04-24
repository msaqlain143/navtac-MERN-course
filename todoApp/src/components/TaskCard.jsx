import React from "react";

const TaskCard = ({ task, handleDeleteTask, handleUpdateTask }) => {
  return (
    <div className="max-w-xl mx-auto my-4">
      <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-between items-start">
          <p className="text-lg font-semibold text-gray-800">
            {task.description}
          </p>
          <p className="text-sm">{task.createdAt}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <select
            value={task.status}
            onChange={(e) => handleUpdateTask(task.id, e.target.value)}
            className="select select-bordered select-sm w-40"
          >
            <option disabled>Task Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <button
            onClick={() => handleDeleteTask(task.id)}
            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
