import { v4 as uuidv4 } from 'uuid';
import taskInterface from "../../Interfaces/taskInterface";
import { actionType, actionEnum } from "../../Interfaces/tasksActions";
import { projectsInitialState } from './projectsReducer';

const initialState: taskInterface[] = [{
    id: uuidv4(),
    name: "Your first task!",
    isDone: false,
    isPriority: true,
    project: projectsInitialState[0].id
}]

const sortTasks = (tasks: taskInterface[]) => {
    tasks.sort((a, b) => {
        if (a.isPriority && b.isPriority) {
            return 0;
        }
        if (a.isPriority) return -1;
        if (b.isPriority) return 1;
        return 0;
    })
    tasks.sort((a, b) => {
        if (a.isDone && b.isDone) {
            return 0;
        }
        if (a.isDone) return 1;
        if (b.isDone) return -1;
        return 0;
    })

    return tasks;
}

const tasksReducer = (state: taskInterface[] = initialState, action: actionType) => {
    switch (action.type) {
        case actionEnum.ADDNEWTASK: {
            let tasks: taskInterface[] = JSON.parse(JSON.stringify(state));
            tasks = [action.payload, ...tasks];
            return sortTasks(tasks);
        }
        case actionEnum.DELETETASK:
            return state.filter(task => task.id !== action.payload);
        case actionEnum.CHANGEDONE:
            const tasks: taskInterface[] = JSON.parse(JSON.stringify(state));
            const task = tasks.find((task) => task.id === action.payload)
            if (task) {
                task.isDone = !task.isDone;
            }
            return sortTasks(tasks);
        case actionEnum.CHANGEPRIORITY: {
            const tasks: taskInterface[] = JSON.parse(JSON.stringify(state));
            const task = tasks.find((task) => task.id === action.payload)
            if (task) {
                task.isPriority = !task.isPriority;
            }
            return sortTasks(tasks);
        }
        case actionEnum.EDITTASK:
            {
                const tasks: taskInterface[] = JSON.parse(JSON.stringify(state));
                let task = tasks.find(task => task.id === action.payload.id) || initialState[0];
                if (task) {
                    task.name = action.payload.name;
                    task.project = action.payload.project;
                }
                return tasks;
            }
        default:
            return state;
    }
}

export default tasksReducer;