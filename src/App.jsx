import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([{text: 'Learn React', completed: false}, {text: 'Build a task tracker', completed: false}, {text: 'Deploy the app', completed: false}])
  const [newTask, setNewTask] = useState('')
  const remainingTasks = tasks.filter((task) => !task.completed).length
  const completedTasks = tasks.filter((task)=> task.completed).length
  const totalTasks = tasks.length
  const progress = tasks.length === 0 ? 0 : (completedTasks / tasks.length) * 100
  function addTask() {
    setTasks([...tasks, {text: newTask, completed: false}])
    setNewTask('')
  }
  function DeleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete))
  }
function completeTask(taskToComplete) {
  setTasks(tasks.map((task) => {
    if (task === taskToComplete) {
      return {...task, completed: !task.completed}
    }
    return task
  }))
}
function undoTask(taskToUndo) {
  setTasks(tasks.map((task) => {
    if (task === taskToUndo) {
      return {...task, completed: false}
    }
    return task
  }))
}
  return (
    <div className="app">
      <h1>My Task Tracker</h1>
      <p style={{ color: '#000000', fontWeight: 'bold' }}>Keep Track of what you need to do!</p>
      <input type="text" placeholder="Add a new task" value={newTask} className="task-input" onChange={(event)=>setNewTask(event.target.value)} />
      <button className="add-button" onClick={addTask}>Add Task</button>
      <p style={{ color: '#000000', fontWeight: 'bold' }}>Keep track of what you need to do!</p>
      <p style={{ color: '#000000', fontWeight: 'bold' }}>Remaining tasks: {remainingTasks}</p>
      <p style={{ color: '#000000', fontWeight: 'bold' }}>Completed tasks: {completedTasks}</p>
      <p style={{ color: '#000000', fontWeight: 'bold' }}>Total tasks: {totalTasks}</p>
      <p style={{ color: '#000000', fontWeight: 'bold' }}>Progress: {Math.round(progress)}%</p>
      <div
  style={{
    width: '100%',
    height: '10px',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    overflow: 'hidden',
  }}
>
  <div
    style={{
      width: `${progress}%`,
      height: '100%',
      backgroundColor: 'green',
      transition: 'width 0.3s ease'
    }}
  />
</div>
      <ul style={{listStyleType: 'none', padding: 0}}>
        {
          tasks.map (
            (task) => <li key={task.text}><span
  style={{
    textDecoration: task.completed ? 'line-through' : 'none'
  }}
>
  {task.text}
</span>
              <button className="complete-button" onClick={() => completeTask(task)}>Complete</button>
              <button className="undo-button" onClick={() => undoTask(task)}>Undo</button>
             <button className="delete-button" onClick={() => DeleteTask(task)}>Delete</button> 
             
              </li>
          )
        }
      </ul>
    </div>
  )
}

export default App