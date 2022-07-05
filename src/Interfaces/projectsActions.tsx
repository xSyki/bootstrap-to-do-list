import projectInterface from "./projectInterface";

export enum actionEnum {
    ADDNEWPROJECT = "addNewProject",
    DELETEPROJECT = "deleteProject",
    RESET = "reset"
}

interface addNewProjectAction {
    type: actionEnum.ADDNEWPROJECT
    payload: projectInterface
}

interface deleteProjectAction {
    type: actionEnum.DELETEPROJECT
    payload: string
}

export type actionType = addNewProjectAction | deleteProjectAction;