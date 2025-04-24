import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          explicabo cumque consectetur harum totam!
        </p>
        <div className="flex justify-end">
          <button className="btn btn-sm btn-error text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
