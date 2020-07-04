import React from 'react'
import './App.css'
import NoteItem from './NoteItem'
import NoteList from './NoteList'
import Context from './context'
import AddNote from './AddNote'


function App() {
    const [notes, setNotes] = React.useState ([
        {id: 1, complited: false, title: 'Wash Jeans'},
        {id: 2, complited: false, title: 'Write a blog post'},
        {id: 3, complited: false, title: 'Draw a cat'}
    ])
        function removeNote(id) {
            setNotes(notes.filter(note=> note.id !== id))
        }

        function addNote(title) {
            setNotes(notes.concat([{
                title,
                id: Date.now(),
                complited: false
            }]))
        }
    return (
        <Context.Provider value={{removeNote}}>
        <div >
            <h1 className='shapkaText'></h1>
            <div className='inputStyle'>
            <AddNote onCreate={addNote}/>
            </div>
            <NoteList notes={notes}/>
        </div>
        </Context.Provider>
    )
}

export default App