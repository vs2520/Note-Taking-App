import React from 'react'

function Header({ handleToggleDarkMode}) {
  return (
    <div className='header'>
        <h1>Note Taking App</h1>
        <button 
            onClick={() => handleToggleDarkMode(
                (preDarkMode) => !preDarkMode
                )
            } 
            className='save'
        >Toggle Mode</button>
    </div>
  )
}

export default Header