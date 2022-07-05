import { actionEnum, actionType } from "../../Interfaces/tasksActions";
import { actionEnum as projectsActionEnum, actionType as projectsActionType } from "../../Interfaces/projectsActions";
import taskInterface from "../../Interfaces/taskInterface";
import projectInterface from "../../Interfaces/projectInterface";
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

export const addNewProject = (task: projectInterface) => {
    return (dispatch: Dispatch<projectsActionType>) => {
        dispatch({
            type: projectsActionEnum.ADDNEWPROJECT,
            payload: task
        })
    }
}

export const deleteProject = (id: string) => {
    return (dispatch: Dispatch<projectsActionType>) => {
        dispatch({
            type: projectsActionEnum.DELETEPROJECT,
            payload: id
        })
    }
}