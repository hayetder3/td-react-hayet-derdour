
import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'uncompleted') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* Mettez ici votre contenu du header si nécessaire */}
      </header>
      <div className="App-body">
        <div className='TaskForm'>
          <TaskForm 
          newTask={newTask} 
          setNewTask={setNewTask} 
          addTask={addTask} 
          className="TaskForm-input" // Ajoutez la classe pour styliser TaskForm
          data-cy="task-input" 
        />
        </div>
        <div>
          <button onClick={() => setFilter('all')} className="FilterButton" data-cy="filter-btn-all">All</button>
          <button onClick={() => setFilter('completed')} className="FilterButton" data-cy="filter-btn-done">Completed</button>
          <button onClick={() => setFilter('uncompleted')} className="FilterButton" data-cy="filter-btn-undone">Not Completed</button>
        </div>
        <div className="TaskList"> {/* Ajoutez la classe pour styliser TaskList */}
          <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} className="TaskList-item" /> {/* Ajoutez la classe pour styliser TaskList */}
        </div>
      </div>
    </div>
  );
}

export default App;
