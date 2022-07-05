import { combineReducers } from "@reduxjs/toolkit";
import taskInterface from "../../Interfaces/taskInterface";
import tasksReducer from "./tasksReducer";
import projectsReducer from "./projectsReducer";
import projectInterface from "../../Interfaces/projectInterface";

const reducers = combineReducers({
    tasks: tasksReducer,
    projects: projectsReducer
});

export default reducers;

export interface State {
    tasks: taskInterface[],
    projects: projectInterface[]
}