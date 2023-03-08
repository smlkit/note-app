import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children, hideModal }) {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <p className="close-modal-btn" onClick={hideModal}>
          <i className="ri-close-line"></i>
        </p>
        {children}
      </div>
    </div>,
    document.body
  );
}
