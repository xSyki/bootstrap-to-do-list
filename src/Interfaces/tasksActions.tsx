import taskInterface from "./taskInterface";

export enum actionEnum {
    ADDNEWTASK = "addNewTask",
    DELETETASK = "deleteTask",
    CHANGEDONE = "changeDone",
    CHANGEPRIORITY = "changePriority",
    EDITTASK = "editTask"
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

interface changeTaskPriorityAction {
    type: actionEnum.CHANGEPRIORITY,
    payload: string
}

interface editTask {
    type: actionEnum.EDITTASK,
    payload: taskInterface
}

export type actionType = addNewTaskAction | deleteTaskAction | changeTaskDoneAction | changeTaskPriorityAction | editTask;