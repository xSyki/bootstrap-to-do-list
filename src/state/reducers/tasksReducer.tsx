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

const tasksReducer = (state: taskInterface[] = initialState, action: actionType) => {
    switch (action.type) {
        case actionEnum.ADDNEWTASK:
            return state = [...state, action.payload];
        case actionEnum.DELETETASK:
            return state.filter(task => task.id !== action.payload);
        case actionEnum.CHANGEDONE:
            const tasks: taskInterface[] = JSON.parse(JSON.stringify(state));
            const task = tasks.find((task) => task.id === action.payload)
            if (task) {
                task.isDone = !task.isDone;
            }
            tasks.sort((a, b) => {
                if (a.isDone && b.isDone) {
                    return 0;
                }
                if (a.isDone) return 1;
                if (b.isDone) return -1;
                return 0;
            })
            return tasks;
        default:
            return state;
    }
}

export default tasksReducer;