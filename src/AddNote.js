import React, {useState} from 'react'

function AddNote({onCreate}) {
    const [value, setValue] = useState('')
    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add Note</button>
        </form>
    )
}

export default AddNote