import "./Note.css";

export default function Note({ note }) {
  return (
    <div className="note" key={note.id}>
      <h2 className="title">{note.title}</h2>
      <p className="body">{note.body}</p>
      <p className="date">{note.date}</p>
      <p>{/* <i className="ri-delete-bin-6-line"></i> */}</p>
    </div>
  );
}
