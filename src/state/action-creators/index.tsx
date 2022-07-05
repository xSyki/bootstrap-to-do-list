import { actionEnum, actionType } from "../../Interfaces/tasksActions";
import taskInterface from "../../Interfaces/taskInterface";
import { Dispatch } from "@reduxjs/toolkit";

export const addNewTask = (task: taskInterface) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: actionEnum.ADDNEWTASK,
            payload: task
        })
    }
}

export const deleteTask = (id: string) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: actionEnum.DELETETASK,
            payload: id
        })
    }
}

export const reset = () => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: actionEnum.RESET
        })
    }
}