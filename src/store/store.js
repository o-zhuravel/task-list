import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./tasks";

export const store = configureStore({
    reducer: {
        tasksValue: tasksReducer,
    }
})