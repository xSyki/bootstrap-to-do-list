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

export const changeTaskDone = (id: string) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: actionEnum.CHANGEDONE,
            payload: id
        })
    }
}

export const changePriority = (id: string) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: actionEnum.CHANGEPRIORITY,
            payload: id
        })
    }
}

export const editTask = (task: taskInterface) => {
    return (dispatch: Dispatch<actionType>) => {
        dispatch({
            type: actionEnum.EDITTASK,
            payload: task
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

export const doneProject = (id: string) => {
    return (dispatch: Dispatch<projectsActionType>) => {
        dispatch({
            type: projectsActionEnum.DONEPROJECT,
            payload: id
        })
    }
}

export const editProject = (project: projectInterface) => {
    return (dispatch: Dispatch<projectsActionType>) => {
        dispatch({
            type: projectsActionEnum.EDITPROJECT,
            payload: project
        })
    }
}