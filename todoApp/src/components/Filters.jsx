import React from "react";

const Filters = ({ taskFilter, setTaskFilter }) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => setTaskFilter("all")}
        className={`btn btn-primary px-6 py-2 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200 ${
          taskFilter === "all" ? "btn-secondary" : ""
        }`}
      >
        All
      </button>

      <button
        onClick={() => setTaskFilter("pending")}
        className={`btn btn-primary px-6 py-2 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200 ${
          taskFilter === "pending" ? "btn-secondary" : ""
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setTaskFilter("completed")}
        className={`btn btn-primary px-6 py-2 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200 ${
          taskFilter === "completed" ? "btn-secondary" : ""
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
