import React from "react";
import "./NoteList.css";
import Note from "./Note";
import NewNote from "./NewNote";

export default function NoteList({ notes, showModal, handleDeleteNote }) {
  return (
    <div className="note-list">
      <NewNote showModal={showModal} />
      {notes.map((note) => (
        <Note note={note} handleDeleteNote={() => handleDeleteNote(note.id)} />
      ))}
    </div>
  );
}
