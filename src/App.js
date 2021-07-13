import { useState } from "react"
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks , setTasks] = useState([
        {id:1,
            Text:'Doctor appointment',
           day:'Feb 5th at 2:30pm',
           reminder:true
        },
        {
            id:2,
            Text:'Meeting at School',
           day:'Feb 6th at 1:30pm',
           reminder:true
        },  
           {
            id:3,
            Text:'food shopping ',
            day:'Feb 5th at 2:40pm',
            reminder:false
        }
    ]  
    )

  return (
    <div className="container">
     <Header title=' Task Tracker'/>
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
