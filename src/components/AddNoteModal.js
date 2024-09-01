import React, { useState, useEffect } from 'react';
import './Modal.css';

function AddNoteModal({ note, onSave, onClose }) {
  const [title, setTitle] = useState(''); // State for note title
  const [content, setContent] = useState(''); // State for note content

  // Populate form fields when editing a note
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [note]);

  // Function to handle saving the note
  const handleSave = () => {
    if (title && content) {
      onSave({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{note ? 'Edit Note' : 'Add Note'}</h2> {/* Display appropriate header */}
        <label>
          Title
          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content
          <textarea
            placeholder="Enter note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <div className="modal-actions">
          <button className="save" onClick={handleSave}>{note ? 'Update' : 'Save'}</button> {/* Change button text dynamically */}
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNoteModal;
