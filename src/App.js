import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import AddNoteModal from './components/AddNoteModal';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]); // State to store all notes
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [currentNote, setCurrentNote] = useState(null); // State to store the note being edited

  // Function to handle adding or updating a note
  const saveNote = (note) => {
    if (currentNote !== null) {
      // If editing, update the note
      const updatedNotes = notes.map((n, index) =>
        index === currentNote ? note : n
      );
      setNotes(updatedNotes);
    } else {
      // If adding a new note
      setNotes([...notes, note]);
    }
    setIsModalOpen(false); // Close the modal
    setCurrentNote(null); // Reset the current note state
  };

  // Function to handle deleting a note
  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  // Function to handle opening the modal for editing a note
  const editNote = (index) => {
    setCurrentNote(index); // Set the note index to be edited
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="container">
      <Header onAddNote={() => setIsModalOpen(true)} />
      <NotesList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote} />
      {isModalOpen && (
        <AddNoteModal
          note={currentNote !== null ? notes[currentNote] : null} // Pass the note to be edited
          onSave={saveNote}
          onClose={() => {
            setIsModalOpen(false); // Close the modal
            setCurrentNote(null); // Reset the current note state
          }}
        />
      )}
    </div>
  );
}

export default App;
