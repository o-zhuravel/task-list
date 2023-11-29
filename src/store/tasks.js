import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


let initTasks = [
    {
        id: '0',
        text: 'Зайти на "my tasks"',
        checked: true,
    },
    {
        id: '1',
        text: 'Натиснути виконано',
        checked: false,
    },
    {
        id: '3',
        text: 'Додати завдання',
        checked: false,
    },
    {
        id: '4'
        ,
        text: 'Видалити завдання',
        checked: false,
    },
];

if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify(initTasks));
}



const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')),
}

export const tasksSlice = createSlice({
    name: 'tasksValue',
    initialState,
    reducers: {
        addTask: (state, action) => {
            let updState = [...state.tasks, {
                id: uuidv4(),
                text: action.payload,
                checked: false,
            }];
            localStorage.setItem('tasks', JSON.stringify(updState));
            state.tasks = JSON.parse(localStorage.getItem('tasks'));
        },
        removeTask: (state, action) => {
            let updState = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updState));
            state.tasks = JSON.parse(localStorage.getItem('tasks'));
        },
        updateFromLS: (state, action) => {
            console.log(action.payload);
            state.tasks = action.payload;
            console.log(state);
        },
        sort: (state) => {
            let updState = state.tasks.sort((a, b) => {
                if (a.checked < b.checked) {
                    return -1;
                }
                if (a.checked > b.checked) {
                    return 1;
                }
                return 0;
            });
            localStorage.setItem('tasks', JSON.stringify(updState));
            state.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    }
});

export const {addTask, removeTask, updateFromLS, sort} = tasksSlice.actions;
export default tasksSlice.reducer;