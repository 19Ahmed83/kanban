import React, {useState} from 'react';
import './App.css';
import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.css';

const initialTasks = [
    {id: 1, title: 'Learn React', status: 'todo'},
    {id: 2, title: 'Learn Go', status: 'todo'},
    {id: 3, title: 'Learn JS', status: 'progress'},
    {id: 4, title: 'Learn Python', status: 'review'},
    {id: 5, title: 'Learn Java', status: 'done'},
]

const statuses = ['todo', 'progress', 'review', 'done']

const nextStatus = (status) => statuses[statuses.indexOf(status) + 1];
const prevStatus = (status) => statuses[statuses.indexOf(status) - 1]

function App() {
    const [tasks, setTasks] = useState(initialTasks)

    const plus = (id) => {
        const updatedTasks = tasks.map(el => el.id === id ? {...el, status: nextStatus(el.status)} : el)
        setTasks(updatedTasks)
    }

    const minus = (id) => {
        const updatedTasks = tasks.map(el => el.id === id ? {...el, status: prevStatus(el.status)} : el)
        setTasks(updatedTasks)
    }
    return (
        <div className="App">
            <h2>Todo</h2>

            <Board tasks={tasks} status='todo' plus={plus} minus={minus}/>

            <h2> In Progress</h2>

            <Board tasks={tasks} status='progress' plus={plus} minus={minus}/>

            <h2>Review</h2>

            <Board tasks={tasks} status='review' plus={plus} minus={minus}/>

            <h2> Done</h2>

            <Board tasks={tasks} status='done' plus={plus} minus={minus}/>
        </div>
    );
}

export default App;
