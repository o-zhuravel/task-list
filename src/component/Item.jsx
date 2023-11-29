import {useState} from "react";
import {useDispatch} from "react-redux";
import {removeTask, updateFromLS} from "../store/tasks";

export default function Item ({id, text, checked}) {
    console.log(id, text, checked);

    const [checkedStatus, setCheckedStatus] = useState(checked);
    const classes = ['todo'];
    const dispatch = useDispatch();

    if (checkedStatus) {
        classes.push('status')
    }

    const updateStatus = () => {
        console.log(checkedStatus);
        setCheckedStatus(!checkedStatus);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        storedTodos.map((el)=>{
            if(el.id === id){
                el.checked = !checkedStatus;
            }
            return true
        });
        console.log(checkedStatus)
        console.log(storedTodos)
        localStorage.setItem('tasks',JSON.stringify(storedTodos));
        let tasksFromLocal = JSON.parse(localStorage.getItem('tasks'));
        dispatch(updateFromLS(tasksFromLocal));
    }

    return (
        <li className={classes.join(' ')}>
            <label>
                <input type='checkbox' checked={checkedStatus} onChange={updateStatus} />
                <span>{text}</span>
                <i className='material-icons red-text' onClick={() => dispatch(removeTask(id))}>X</i>
            </label>
        </li>
    )
}