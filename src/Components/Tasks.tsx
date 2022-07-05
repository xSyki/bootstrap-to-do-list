import { bindActionCreators } from '@reduxjs/toolkit';
import { useState } from 'react';
import { InputGroup, Form, ProgressBar, ListGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import { stringify } from 'querystring';

function Tasks() {

    const dispatch = useDispatch();
    const tasks = useSelector((state: State) => state.tasks)

    const { addNewTask } = bindActionCreators(actionCreators, dispatch);

    const [taskName, setTaskName] = useState("");
    const [priority, setIsPriority] = useState(false);

    const tryAddNewTask = (e: React.SyntheticEvent | undefined) => {
        e && e.preventDefault();

        addNewTask({
            id: uuidv4(),
            name: taskName,
            isDone: false,
            isPriority: priority,
            project: uuidv4()
        });
        setTaskName("");
        setIsPriority(false);
    }

    console.log(tasks);

    return (
        <div className='d-flex flex-column gap-3'>
            <Form onSubmit={e => tryAddNewTask(e)}>
                <InputGroup>
                    <Button variant="outline-secondary" id="button-addon1" onClick={tryAddNewTask}>
                        +
                    </Button>
                    <Form.Control aria-label="Text input with radio button" value={taskName} onChange={e => setTaskName(e.target.value)} />
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                </InputGroup>
            </Form>
            <ProgressBar now={60} />
            <ListGroup as="ul">
                {
                    tasks.map((task) => {
                        return (
                            <Task task={task} />
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default Tasks;