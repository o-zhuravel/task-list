import Item from "./Item";
import {sort} from "../store/tasks";
import {useDispatch} from "react-redux";

export default function List (props) {
    console.log(props.tasks);
    const dispatch = useDispatch();
    return (
        <div>
            <div className='sort-btn' onClick={() => dispatch(sort())}>first outstanding</div>
            <ul>
                {props.tasks.map(task => <Item key={task.id} {...task}></Item>)}
            </ul>
        </div>

    )
}