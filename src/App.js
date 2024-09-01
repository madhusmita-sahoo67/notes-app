import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import AddNoteModal from './components/AddNoteModal';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentNote, setCurrentNote] = useState(null); 


  const saveNote = (note) => {
    if (currentNote !== null) {
     
      const updatedNotes = notes.map((n, index) =>
        index === currentNote ? note : n
      );
      setNotes(updatedNotes);
    } else {
      setNotes([...notes, note]);
    }
    setIsModalOpen(false); 
    setCurrentNote(null); 
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const editNote = (index) => {
    setCurrentNote(index); 
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <Header onAddNote={() => setIsModalOpen(true)} />
      <NotesList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote} />
      {isModalOpen && (
        <AddNoteModal
          note={currentNote !== null ? notes[currentNote] : null} 
          onSave={saveNote}
          onClose={() => {
            setIsModalOpen(false); 
            setCurrentNote(null); 
          }}
        />
      )}
    </div>
  );
}

export default App;
