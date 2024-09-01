import React from 'react';
import './NoteCard.css'; 

function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="note-card">
      <div className="note-title-container">
        <h2>{note.title}</h2>
      </div>
      
      <p>{note.content.substring(0, 100)}...</p>
      
      <div className="note-card-buttons">
        <button className="edit-button" onClick={onEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
