import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(
    [{id: 1, text: 'A', day: 'Feb 5th at 2:30pm', reminder: true},
     {id: 2, text: 'B', day: 'Feb 4th at 4:30pm',reminder: true},
     {id: 3, text: 'C', day: 'Feb 2th at 3:30pm',reminder: false},
     {id: 4, text: 'D', day: 'Feb 1th at 1:30pm',reminder: true}])
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = task => {
    setTasks([...tasks, {id: tasks.length + 1,...task}])
  }

  return (
    <div className='Container'>
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );

}

export default App;
