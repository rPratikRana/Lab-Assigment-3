import React from 'react';

const TaskItem = ({ task, onDeleteTask, onToggleCompletion }) => {
  return (
    <li
      style={{
        padding: '10px',
        background: '#f1f1f1',
        marginBottom: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: task.completed ? 'line-through' : 'none',  // Strikethrough if completed
        color: task.completed ? 'gray' : 'black',  // Gray color for completed tasks
      }}
    >
      <span>{task.text}</span>
      <div>
        <button onClick={() => onToggleCompletion(task.id)} style={{ marginRight: '10px' }}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDeleteTask(task.id)} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

