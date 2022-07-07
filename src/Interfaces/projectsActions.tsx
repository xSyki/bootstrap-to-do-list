import projectInterface from "./projectInterface";

export enum actionEnum {
    ADDNEWPROJECT = "addNewProject",
    DELETEPROJECT = "deleteProject",
    EDITPROJECT = "editProject"
}

interface addNewProjectAction {
    type: actionEnum.ADDNEWPROJECT
    payload: projectInterface
}

interface deleteProjectAction {
    type: actionEnum.DELETEPROJECT
    payload: string
}

interface editProjectAction {
    type: actionEnum.EDITPROJECT
    payload: projectInterface
}

export type actionType = addNewProjectAction | deleteProjectAction | editProjectAction;