import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <ul data-cy="task-list">
      {tasks.map((task, index) => (
        <li 
          key={task.id} 
          onClick={() => toggleTaskCompletion(index)} 
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          data-cy="task-item"
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
