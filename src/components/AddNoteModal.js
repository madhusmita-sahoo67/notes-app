import React, { useState, useEffect } from 'react';
import './Modal.css';

function AddNoteModal({ note, onSave, onClose }) {
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState('');

 
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [note]);

 
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
        <h2>{note ? 'Edit Note' : 'Add Note'}</h2> 
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
          <button className="save" onClick={handleSave}>{note ? 'Update' : 'Save'}</button> 
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNoteModal;
