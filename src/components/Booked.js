import React from "react";
import "../styles/Booked.css"; // Add styles for the popup

const Booked = ({ message, onClose }) => {
  return (
    <div className="booked-overlay">
      <div className="booked-container">
        <h2>🎉 Success!</h2>
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Booked;
