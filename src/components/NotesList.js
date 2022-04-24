import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className='notes-list'>
        {notes.map((note) => (
            <Note 
                key={Math.random()}
                id={note.id} 
                text={note.text} 
                date={note.date}
                handleDeleteNote={handleDeleteNote}
            />
        ))}
        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList