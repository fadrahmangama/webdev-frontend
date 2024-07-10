// Modal.js
import React from "react"; // Buat file CSS ini untuk mengatur gaya modal

const Modal = ({ isOpen, onClose, title, children, desc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title text-center">{title}</h2>
        <p className="modal-description">{desc}</p>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
