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
            color: projectColor
        })
        setProjectName("");
        setProjectColor("#000000");
    }

    return (
        <div>
            <Form onSubmit={e => tryAddNewProject(e)}>
                <InputGroup>
                    <Button variant="outline-secondary" id="button-addon1" onClick={tryAddNewProject}>
                        +
                    </Button>
                    <Form.Control value={projectName} onChange={(e) => setProjectName(e.target.value)} aria-label="Text input with radio button" />
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
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
                        return <Project project={project} />
                    })
                }
            </ListGroup>
        </div>
    )
}

export default Projects;