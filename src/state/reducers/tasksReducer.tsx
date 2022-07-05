import { v4 as uuidv4 } from 'uuid';
import taskInterface from "../../Interfaces/taskInterface";
import { actionType, actionEnum } from "../../Interfaces/tasksActions";

const initialState: taskInterface[] = [{
    id: uuidv4(),
    name: "Your first task!",
    isDone: false,
    isPriority: true,
    project: uuidv4()
}]

const tasksReducer = (state: taskInterface[] = initialState, action: actionType) => {
    switch (action.type) {
        case actionEnum.ADDNEWTASK:
            return state = [...state, action.payload];
        case actionEnum.DELETETASK:
            return state.filter(task => task.id === action.payload);
        case actionEnum.RESET:
            return state = [];
        default:
            return state;
    }
}

export default tasksReducer;