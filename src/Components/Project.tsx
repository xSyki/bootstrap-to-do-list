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

    const { deleteProject, editProject } = bindActionCreators(actionCreators, dispatch);

    const [isNameEditing, setIsNameEditing] = useState(false);
    const [temporaryProjectName, setTemporaryProjectName] = useState(project.name);

    const editProjectColor = (color: string) => {
        editProject({
            id: project.id,
            name: project.name,
            color
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
            color: project.color
        })

        setIsNameEditing(false);
    }

    return (
        <div>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="my-auto">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </div>
                <div className="ms-2 me-auto">
                    {
                        isNameEditing ?
                            <Form onSubmit={editProjectName}>
                                <Form.Control value={temporaryProjectName} onChange={(e) => setTemporaryProjectName(e.target.value)} aria-label="Text input with radio button" />
                            </Form>
                            :
                            <div className="fw-bold" onClick={handleNameDC}>{project.name}</div>
                    }
                </div>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    value={project.color}
                    onChange={(e) => editProjectColor(e.target.value)}
                    title="Choose your color"
                />
                <DropdownButton
                    variant="outline-secondary"
                    title=""
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item onClick={() => deleteProject(project.id)}>Delete</Dropdown.Item>
                </DropdownButton>
            </ListGroup.Item>
        </div>
    )
}

export default Project;