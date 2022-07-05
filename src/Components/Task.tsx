import { InputGroup, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import taskInterface from '../Interfaces/taskInterface';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from '../state';

interface taskComponentInterface {
    task: taskInterface
}


function Task(props: taskComponentInterface) {

    const { task } = props;

    const dispatch = useDispatch();
    const projects = useSelector((state: State) => state.projects);

    const { changeTaskDone } = bindActionCreators(actionCreators, dispatch);

    const project = projects.find(project => {
        return project.id === task.project
    })

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            disabled={task.isDone}
        >
            <div className="my-auto">
                <InputGroup.Checkbox checked={task.isDone} onChange={() => changeTaskDone(task.id)} aria-label="Checkbox for following text input" />
            </div>
            <div className="ms-2 me-auto" >
                <div className="fw-bold">{task.name}</div>
                <p style={{ color: `${project?.color}` }}>{project && project.name}</p>
            </div>
            <InputGroup.Radio className="className='my-auto'" aria-label="Radio button for following text input" />
            <DropdownButton
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
        </ListGroup.Item>
    )
}

export default Task;