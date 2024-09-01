import React from 'react';
import NoteCard from './NoteCard';

function NotesList({ notes, onDeleteNote, onEditNote }) {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          note={note}
          onDelete={() => onDeleteNote(index)}
          onEdit={() => onEditNote(index)}
        />
      ))}
    </div>
  );
}

export default NotesList;
