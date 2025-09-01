
import { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput] = useState('') 
  const [task,setTask] = useState([])
  const [checked, setChecked] = useState([])

   const handleAddTask=()=>{
    if(input===''){
      alert("Task is not entered")
      return;
    }
    setTask([
      ...task,
      input
    ])
    setChecked([
      ...checked,
      false
    ])
    alert("Task added successfully")
    setInput('')  
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">To Do Tasks</h2>
      <div className="add-task-section">
        <h4 className="add-task-title">Add Task</h4>
        <input
          type='text'
          className="task-input"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddTask}>ADD</button>
      </div>
      <br />
      <h3 className="tasks-title">Tasks</h3>
      <ul className="task-list">
        {task.map((tas,index)=>(
          <li className="task-item" key={index}>
            <span className="task-text">{tas}</span>
            <span className="checkbox-section">
              <input
                type='checkbox'
                className={checked[index] ? "task-checkbox checked" : "task-checkbox unchecked"}
                checked={checked[index] || false}
                onChange={() => {
                  const newChecked = [...checked];
                  newChecked[index] = !newChecked[index];
                  setChecked(newChecked);
                }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
