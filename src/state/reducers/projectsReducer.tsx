import { v4 as uuidv4 } from 'uuid';
import projectInterface from '../../Interfaces/projectInterface';
import { actionType, actionEnum } from "../../Interfaces/projectsActions";

export const projectsInitialState: projectInterface[] = [{
    id: uuidv4(),
    name: "Your first project!",
    color: "#bbbbbb",
    isDone: false
},
{
    id: uuidv4(),
    name: "Your 2 project!",
    color: "#000000",
    isDone: false
}]

const projectsReducer = (state: projectInterface[] = projectsInitialState, action: actionType) => {
    switch (action.type) {
        case actionEnum.ADDNEWPROJECT:
            return state = [...state, action.payload];
        case actionEnum.DELETEPROJECT:
            return state.filter(project => project.id !== action.payload);
        case actionEnum.DONEPROJECT: {
            const projects: projectInterface[] = JSON.parse(JSON.stringify(state));
            let project = projects.find(project => project.id === action.payload) || projectsInitialState[0];
            if (project) {
                project.isDone = !project.isDone;
            }
            projects.sort((a, b) => {
                if (a.isDone && b.isDone) {
                    return 0;
                }
                if (a.isDone) return 1;
                if (b.isDone) return -1;
                return 0;
            })
            return projects;
        }
        case actionEnum.EDITPROJECT:
            const projects: projectInterface[] = JSON.parse(JSON.stringify(state));
            let project = projects.find(project => project.id === action.payload.id) || projectsInitialState[0];
            if (project) {
                project.color = action.payload.color;
                project.name = action.payload.name;
            }
            return projects;
        default:
            return state;
    }
}

export default projectsReducer;