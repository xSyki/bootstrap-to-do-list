import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from '../state';
import { InputGroup, ListGroup, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import projectInterface from "../Interfaces/projectInterface";
import { useState } from 'react';

interface projectComponentInterface {
    project: projectInterface
}

function Project(props: projectComponentInterface) {

    const { project } = props;

    const dispatch = useDispatch();
    const tasks = useSelector((state: State) => state.tasks).filter(task => task.project === project.id);

    const { deleteProject, editProject, doneProject } = bindActionCreators(actionCreators, dispatch);
    const { changeTaskDone, deleteTask } = bindActionCreators(actionCreators, dispatch);

    const [isNameEditing, setIsNameEditing] = useState(false);
    const [temporaryProjectName, setTemporaryProjectName] = useState(project.name);

    const editProjectColor = (color: string) => {
        editProject({
            id: project.id,
            name: project.name,
            color,
            isDone: project.isDone
        })
    }

    const handleNameDC = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.detail === 2) {
            setIsNameEditing(true);
        }
    }

    const editProjectName = () => {
        editProject({
            id: project.id,
            name: temporaryProjectName,
            color: project.color,
            isDone: project.isDone
        })

        setIsNameEditing(false);
    }

    const handleProjectDone = () => {
        if (!project.isDone) {
            tasks.map(task => {
                if (task.isDone) return;
                changeTaskDone(task.id);
            })
        }
        doneProject(project.id);
    }

    const handleDeleteProject = () => {
        tasks.map(task => {
            if (task.isDone) return;
            deleteTask(task.id);
        })
        deleteProject(project.id)
    }

    return (
        <div>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="my-auto">
                    <InputGroup.Checkbox checked={project.isDone} onChange={handleProjectDone} />
                </div>
                <div className="ms-2 me-auto">
                    {
                        isNameEditing ?
                            <Form onSubmit={editProjectName}>
                                <Form.Control value={temporaryProjectName} onChange={(e) => setTemporaryProjectName(e.target.value)} />
                            </Form>
                            :
                            <>
                                <div className="fw-bold" onClick={handleNameDC}>
                                    {project.name}
                                </div>
                                <div>
                                    Tasks: {tasks.length}
                                </div>
                            </>
                    }
                </div>
                <Form.Control
                    type="color"
                    value={project.color}
                    onChange={(e) => editProjectColor(e.target.value)}
                    title="Choose your color"
                />
                <DropdownButton
                    variant="outline-secondary"
                    title=""
                    className='ms-2'
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item onClick={handleDeleteProject}>
                        Delete
                    </Dropdown.Item>
                </DropdownButton>
            </ListGroup.Item>
        </div>
    )
}

export default Project;