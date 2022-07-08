import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from '../state';

import { v4 as uuidv4 } from 'uuid';

import { InputGroup, Form, ListGroup, Button } from 'react-bootstrap';
import Project from './Project';

function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector((state: State) => state.projects);
    const { addNewProject } = bindActionCreators(actionCreators, dispatch);

    const [projectName, setProjectName] = useState("");
    const [projectColor, setProjectColor] = useState("#000000");

    const tryAddNewProject = (e: React.SyntheticEvent | undefined) => {
        e && e.preventDefault();

        if (!projectName || !projectColor) return;

        addNewProject({
            id: uuidv4(),
            name: projectName,
            color: projectColor,
            isDone: false
        })
        setProjectName("");
    }

    return (
        <div className='d-flex flex-column gap-3'>
            <Form onSubmit={e => tryAddNewProject(e)}>
                <InputGroup>
                    <Button variant="outline-secondary" onClick={tryAddNewProject}>
                        +
                    </Button>
                    <Form.Control className='w-75' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                    <Form.Control
                        type="color"
                        value={projectColor}
                        onChange={(e) => setProjectColor(e.target.value)}
                        style={{ minWidth: "3rem", maxWidth: "3rem" }}
                    />
                </InputGroup>
            </Form>
            <ListGroup as="ul">
                {
                    projects.map(project => {
                        return <Project key={project.id} project={project} />
                    })
                }
            </ListGroup>
        </div>
    )
}

export default Projects;