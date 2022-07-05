import { v4 as uuidv4 } from 'uuid';
import projectInterface from '../../Interfaces/projectInterface';
import { actionType, actionEnum } from "../../Interfaces/projectsActions";

export const projectsInitialState: projectInterface[] = [{
    id: uuidv4(),
    name: "Your first project!",
    color: "#bbbbbb"
},
{
    id: uuidv4(),
    name: "Your 2 project!",
    color: "#000000"
}]

const projectsReducer = (state: projectInterface[] = projectsInitialState, action: actionType) => {
    switch (action.type) {
        case actionEnum.ADDNEWPROJECT:
            return state = [...state, action.payload];
        case actionEnum.DELETEPROJECT:
            return state.filter(task => task.id === action.payload);
        default:
            return state;
    }
}

export default projectsReducer;