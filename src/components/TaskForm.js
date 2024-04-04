import React from 'react';

const TaskForm = ({ newTask, setNewTask, addTask }) => {
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}  data-cy="task-form">
      <input 
        type="text" 
        className='TaskForm-input'
        value={newTask} 
        onChange={handleChange} 
        placeholder="Enter task"
      />
      <button type="submit"  className="TaskForm-button" data-cy="add-task-btn">Add Task</button>
    </form>
  );
}

export default TaskForm;
