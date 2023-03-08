import "./NewNote.css";

export default function NewNote({ showModal }) {
  return (
    <div className="new-note" onClick={showModal}>
      <p>
        <i className="ri-add-circle-line"></i>
      </p>
    </div>
  );
}
