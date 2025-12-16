import './NotesList.css'
import { useState } from 'react';
import EditModal from './EditModal';

export default function NoteList({ notes = [], deleteNote, markUsDone, editNote }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  function openModal(note) {
    setEditingNote(note);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingNote(null);
  }

  function saveModal(newText) {
    if (!editingNote) return;
    editNote(editingNote.id, newText);
    closeModal();
  }

  return (
    <div className='countainer'>
      {notes.map((note) => (
        <div key={note.id} style={{ textDecoration: note.isDone ? "line-through" : "none" }} className="notesList">
          <div className="task-text">{note.task}</div>
          <div className="controls">
            <button className='btn' onClick={() => markUsDone && markUsDone(note.id)}>Done</button>
            <button className='btn' onClick={() => openModal(note)}>Edit</button>
            <button className='btn' onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </div>
      ))}

      <EditModal isOpen={modalOpen} initialText={editingNote?.task || ''} onSave={saveModal} onClose={closeModal} />
    </div>
  )
}