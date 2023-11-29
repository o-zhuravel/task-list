import {useSelector, useDispatch} from "react-redux";
import {useRef, useState} from "react";

import {
    addTask,
    updateFromLS,
} from "./store/tasks";

import List from "./component/List";

function Main () {
     const tasks = useSelector((state) => state.tasksValue.tasks);
     const dispatch = useDispatch();

     const [newTaskText, setNewTaskText] = useState('');

    const inputText = useRef();

    function sendLS () {
        let tasksFromLocal = JSON.parse(localStorage.getItem('tasks'));
        updateFromLS(tasksFromLocal);
        console.log('ff')
    }

    sendLS();

     function addForKey (e) {
         if (e.key === 'Enter' && newTaskText !== '') {
             dispatch(addTask(newTaskText));
             inputText.current.value='';
         }
     }

    function addForBtn () {
         if (newTaskText !== '') {
             dispatch(addTask(newTaskText));
             inputText.current.value='';
         }
    }

    return (
        <div className='container' onKeyDown={(e) => addForKey(e)}>
            <h1>Tasks</h1>
            <div className='input-field'>
                <input type='text' ref={inputText} onChange={e => setNewTaskText(e.target.value)}/>
                <label>Task name</label>
                <button onClick={addForBtn}>add</button>
            </div>
            <List tasks={tasks}/>
        </div>
    );
}

export default Main;