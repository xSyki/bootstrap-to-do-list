import taskInterface from "./taskInterface";

export enum actionEnum {
    ADDNEWTASK = "addNewTask",
    DELETETASK = "deleteTask",
    RESET = "reset"
}

interface addNewTaskAction {
    type: actionEnum.ADDNEWTASK
    payload: taskInterface
}

interface deleteTaskAction {
    type: actionEnum.DELETETASK
    payload: string
}

interface resetAction {
    type: actionEnum.RESET
}

export type actionType = addNewTaskAction | deleteTaskAction | resetAction;