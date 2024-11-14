import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onToggleCompletion }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onToggleCompletion={onToggleCompletion}
            />
          ))
        ) : (
          <p>No tasks available. Add a task!</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
