import { useState } from "react"
import TextField from '@mui/material/TextField';
import './NotesList.css'

export default function AddNote({ addNote }) {
    const [notesList, setNotesList] = useState("");

    let inputHandler = (event) => {
        setNotesList(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        if (notesList.trim() === "") return;

        addNote(notesList);

        setNotesList("");
        console.log(notesList);
    }


    return ( <div>
        <form action="" onSubmit={handleSubmit}>
       {/* <input type="text" name="note" id="note" placeholder="Add Notes " value={notesList} onChange={inputHandler} /> */}
        <TextField fullWidth label="fullWidth" id="fullWidth" value={notesList} onChange={inputHandler}/>
        <br /> <br />
       <button type="submit" className="btn2">Add Notes</button>
       </form>
    </div> )
}