import React, { useState } from 'react'

function AddNote({handleAddNote}) {

    const [noteText, setNoteText] = useState('');

    const characterLimit = 200;

    const handleChange = (event) => {
        if((characterLimit - event.target.value.length) >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if(noteText.length == 0) {
            alert('Please add some note!');
        }
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className='note new'>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveClick} className='save'>Save</button>
            </div>
        </div>
    )
}

export default AddNote