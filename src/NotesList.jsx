import './NotesList.css' 
export default function NoteList({ notes = [], deleteNote, markUsDone }) {
  return (
    <div className='countainer'>
     
        {notes.map((note) => (
          <div key={note.id} style={{textDecoration: note.isDone ? "line-through" : "none"}} className="notesList"> {note.task}
            <button onClick={() => deleteNote(note.id)} className='btn'> delete </button>
            <button onClick={() => markUsDone(note.id)} className='btn'> Done </button>
          </div>
        ))}
      
    </div>
  )
}