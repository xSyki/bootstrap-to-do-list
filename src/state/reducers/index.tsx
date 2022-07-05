import { combineReducers } from "@reduxjs/toolkit";
import taskInterface from "../../Interfaces/taskInterface";
import tasksReducer from "./tasksReducer";

const reducers = combineReducers({
    tasks: tasksReducer,
});

export default reducers;

// export type State = ReturnType<typeof reducers>

export interface State {
    tasks: taskInterface[]
}