import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroup, Form, ListGroup, Button } from 'react-bootstrap';
import Project from './Project';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        setProjectColor("#000000");
    }

    return (
        <div>
            <Form onSubmit={e => tryAddNewProject(e)}>
                <InputGroup className="mb-3">
                    <Button variant="outline-secondary" onClick={tryAddNewProject}>
                        +
                    </Button>
                    <Form.Control className='w-75' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                    <Form.Control
                        type="color"
                        defaultValue={projectColor}
                        value={projectColor}
                        onChange={(e) => setProjectColor(e.target.value)}
                        title="Choose your color"
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