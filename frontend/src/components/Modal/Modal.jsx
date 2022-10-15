import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ closeModal, children }) {
  return ReactDOM.createPortal(
    <div className="modal-background" aria-hidden="true">
      <div className="modal">
        <div className="modal-content">
          <button
            className="modal-close-btn"
            onClick={closeModal}
            type="button"
          >
            <i className="fas fa-times txt-red" id="modal-dismiss-btn" />
          </button>

          <div className="txt-dark-gray lh-md">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
