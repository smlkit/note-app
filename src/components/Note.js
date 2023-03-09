import "./Note.css";

export default function Note({ note, handleDeleteNote }) {
  return (
    <div className="note" key={note.id}>
      <h2 className="title">{note.title}</h2>
      <p className="body">{note.body}</p>
      <div className="note-info">
        <p className="delete-btn" onClick={handleDeleteNote}>
          <i className="ri-delete-bin-6-line"></i>
        </p>
        <p className="date">{note.date}</p>
      </div>
    </div>
  );
}
