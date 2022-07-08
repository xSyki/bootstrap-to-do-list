import { useState } from 'react';
import taskInterface from '../Interfaces/taskInterface';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from '../state';

import { InputGroup, ListGroup, DropdownButton, Dropdown, CloseButton, Form } from 'react-bootstrap';

interface taskComponentInterface {
    task: taskInterface
}

function Task(props: taskComponentInterface) {

    const { task } = props;

    const dispatch = useDispatch();
    const projects = useSelector((state: State) => state.projects);

    const { changeTaskDone, deleteTask, editTask, changePriority } = bindActionCreators(actionCreators, dispatch);

    const [isNameEditing, setIsNameEditing] = useState(false);
    const [temporaryName, setTemporaryName] = useState(task.name);
    const [isProjectEditing, setIsProjectEditing] = useState(false);

    const project = projects.find(project => {
        return project.id === task.project
    })

    const handleProjectDC = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        if (e.detail === 2) {
            setIsProjectEditing(true);
        }
    }

    const handleNameDC = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        if (e.detail === 2) {
            setIsNameEditing(true);
        }
    }

    const changeProject = (newProject: string) => {
        editTask({
            id: task.id,
            name: task.name,
            isDone: task.isDone,
            isPriority: task.isPriority,
            project: newProject
        })

        setIsProjectEditing(false);
    }

    const changeName = () => {
        editTask({
            id: task.id,
            name: temporaryName,
            isDone: task.isDone,
            isPriority: task.isPriority,
            project: task.project
        })

        setIsNameEditing(false);
    }

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center"
        >
            <InputGroup.Checkbox checked={task.isDone} onChange={() => changeTaskDone(task.id)} />
            <div className="ms-2 me-auto" >
                {
                    isNameEditing ?
                        <Form onSubmit={changeName}>
                            <Form.Control value={temporaryName} onChange={e => setTemporaryName(e.target.value)} />
                        </Form>
                        :
                        <div className="fw-bold" onClick={handleNameDC}>
                            {task.name}
                        </div>
                }
                {
                    isProjectEditing ?
                        <div className='d-flex flex-row align-items-center gap-1'>
                            <Form.Select defaultValue={task.project} onChange={(e) => changeProject(e.target.value)} size="sm">
                                <option value="">
                                    Inbox
                                </option>
                                {
                                    projects.map(project => {
                                        if (project.isDone) return null;
                                        return (
                                            <option key={project.id} value={project.id}>
                                                {project.name}
                                            </option>
                                        )
                                    })
                                }
                            </Form.Select>
                            <CloseButton onClick={() => setIsProjectEditing(false)} />
                        </div>
                        :
                        <div style={{ color: `${project?.color}` }} onClick={handleProjectDC}>
                            {project ? project.name : "Inbox"}
                        </div>
                }
            </div>
            <InputGroup.Radio checked={task.isPriority} onClick={() => changePriority(task.id)} />
            <DropdownButton
                variant="outline-secondary"
                title=""
                className='ms-2'
                id="input-group-dropdown-1"
            >
                <Dropdown.Item onClick={() => deleteTask(task.id)}>Delete</Dropdown.Item>
            </DropdownButton>
        </ListGroup.Item>
    )
}

export default Task;