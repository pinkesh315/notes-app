import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteList from './NotesList';
import AddNote from './AddNotes';


export default function NotesApp() {
    const [notes, setNotes] = useState(() => {
let savedNotes = localStorage.getItem("notes");
return savedNotes ? JSON.parse(savedNotes) : [{ task: "task", id: uuidv4(), isDone: false }, { task: "task2", id: uuidv4(), isDone: false }];
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]);

    function addNote(newTextList) {
const newNotes = {task: newTextList, id: uuidv4(), isDone: false}
setNotes([...notes, newNotes]);
    }

    let deleteNote = (id) => {
setNotes(notes.filter((note) => note.id !== id))
    };

    let markUsDone = (id) => {
        setNotes((prevData) => {
         return   prevData.map((note) => {
                if(note.id === id) {
                    return {...note, isDone: true}
                } else {
                    return note;
                }
            })
        })
    } 


    return ( <div>
        <h1>Notes App by PUSHPENDRA</h1>
        <AddNote addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} markUsDone={markUsDone} />
    </div> )
}
