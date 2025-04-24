import React, { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const [des, setDes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask(des);
    setDes("");
  }

  return (
    <div className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-start sm:items-end gap-4"
      >
        <div className="flex flex-col w-full sm:w-3/4">
          <label
            htmlFor="description"
            className="text-base font-medium text-gray-700 mb-1"
          >
            Add New Task
          </label>
          <input
            id="description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            type="text"
            placeholder="What do you need to do?"
            className="input input-bordered input-primary w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary w-full sm:w-auto px-6 py-2 text-white hover:scale-105 transition-transform duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
