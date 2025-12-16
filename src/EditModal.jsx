import React, { useState, useEffect } from 'react';
import './NotesList.css';

export default function EditModal({ isOpen, initialText = '', onSave, onClose }) {
  const [value, setValue] = useState(initialText);

  useEffect(() => {
    setValue(initialText);
  }, [initialText, isOpen]);

  if (!isOpen) return null;

  function handleSave() {
    const text = value.trim();
    if (!text) return;
    onSave(text);
  }

  let handelInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal-content" onMouseDown={(e) => e.stopPropagation()}>
        <h3>Edit Note</h3>
        <textarea value={value} onChange={handelInput} rows={4} />
        <div className="modal-actions">
          <button className="btn" onClick={handleSave}>Save</button>
          <button className="btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
