import taskInterface from "./taskInterface";

export enum actionEnum {
    ADDNEWTASK = "addNewTask",
    DELETETASK = "deleteTask",
    CHANGEDONE = "changeDone"
}

interface addNewTaskAction {
    type: actionEnum.ADDNEWTASK
    payload: taskInterface
}

interface deleteTaskAction {
    type: actionEnum.DELETETASK
    payload: string
}

interface changeTaskDoneAction {
    type: actionEnum.CHANGEDONE,
    payload: string
}

export type actionType = addNewTaskAction | deleteTaskAction | changeTaskDoneAction;