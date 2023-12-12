import React, { useState } from "react";
import "./task.css";
const Task = ({ task, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleEdit = () => {
    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
        className="input-edit-checkbox"
      />
      {isEditing ? (
        <>
          <input
            autoFocus
            type="text"
            id="myText"
            value={editedTitle}
            onChange={handleEditChange}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <label
            onClick={() => setIsEditing(true)}
            className={task.isCompleted ? "task-title-completed" : ""}
          >
            {task.title}
          </label>

          <button onClick={() => setIsEditing(true)}>
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
