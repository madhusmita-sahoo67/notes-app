import React from 'react';

function Header({ onAddNote }) {
  return (
    <header className="header">
      <h1>My Notes</h1>
      <button onClick={onAddNote}>Add New Note</button>
    </header>
  );
}

export default Header;
