import React from 'react'
import NoteItem from './NoteItem'


    const styles = {
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0
        }
    }

function NoteList(props) {
    return (
        <ul style={styles.ul}>
            {props.notes.map(note => {
                return <NoteItem note={note} key={note.id}/>
            })}
        </ul>
    )

}

export default NoteList
