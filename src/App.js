import { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import Modal from "./components/Modal";
import NewNoteForm from "./components/NewNoteForm";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Example Note",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      date: "09/03/23",
      id: 1,
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const addNote = (event) => {
    setNotes((prevEvents) => {
      return [...prevEvents, event];
    });

    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <NoteList notes={notes} showModal={handleShowModal} />

      {showModal && (
        <Modal hideModal={handleHideModal}>
          <NewNoteForm addNote={addNote} />
        </Modal>
      )}
    </div>
  );
}

export default App;
