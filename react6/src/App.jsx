import { useState } from "react";
import Modal from "./Modal"; // ✅ correctly importing your custom Modal component

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 text-center">
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
