import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(['Learn React', 'Build a Task Tracker', 'Deploy the App'])
  const [newTask, setNewTask] = useState('')
  function addTask() {
    setTasks([...tasks, newTask])
    setNewTask('')
  }
  function DeleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task !== taskToDelete))
  }

  return (
    <div>
      <h1>My Task Tracker</h1>
      <p>Keep Track of what you need to do!</p>
      <input type="text" placeholder="Add a new task" value={newTask} onChange={(event)=>setNewTask(event.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {
          tasks.map (
            (task) => <li key={task}>{task}
             <button onClick={() => DeleteTask(task)}>Delete</button>
              </li>
          )
        }
      </ul>
    </div>
  )
}

export default App