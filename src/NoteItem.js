import React from 'react'
import Context from './context'
import { useContext } from 'react'

const styles = {
    li: {
        marginTop: '1%',
        marginLeft: '24%',
        marginRight: '24%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        boederRadius: '4px',
        marginBottom: '.5rem'
    }
}

function NoteItem({ note }) {
    const { removeNote } = useContext(Context)
    return (
        <li style={styles.li}>
            <span>
                {note.title}
            </span>
           <button onClick={() => removeNote(note.id)}>&times;</button>
        </li>
    )
}

export default NoteItem