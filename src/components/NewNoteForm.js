import React from "react";
import "./NewNoteForm.css";
import { useState } from "react";

export default function NewNoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      title: title,
      body: body,
      date: new Date().toLocaleDateString("en-GB"),
      id: Math.floor(Math.random() * 10000),
    };

    addNote(note);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter note title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Enter note:</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          ></textarea>
        </label>

        <button className="add-note-btn">Add note</button>
      </form>
    </div>
  );
}
