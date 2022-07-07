import { bindActionCreators } from '@reduxjs/toolkit';
import { useState } from 'react';
import { InputGroup, Form, ProgressBar, ListGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: State) => state.tasks);
    const projects = useSelector((state: State) => state.projects);

    const { addNewTask } = bindActionCreators(actionCreators, dispatch);

    const [taskName, setTaskName] = useState("");
    const [isPriority, setIsPriority] = useState(false);
    const [projectId, setProjectId] = useState(projects[0].id);

    const tryAddNewTask = (e: React.SyntheticEvent | undefined) => {
        e && e.preventDefault();

        if (!taskName) return;

        addNewTask({
            id: uuidv4(),
            name: taskName,
            isDone: false,
            isPriority: isPriority,
            project: projectId
        });
        setTaskName("");
        setIsPriority(false);
    }

    console.log(tasks);

    const progres = (tasks.filter(task => task.isDone).length / tasks.length) * 100;

    return (
        <div className='d-flex flex-column gap-3'>
            <Form onSubmit={e => tryAddNewTask(e)}>
                <InputGroup>
                    <Button variant="outline-secondary" id="button-addon1" onClick={tryAddNewTask}>
                        +
                    </Button>
                    <Form.Control aria-label="Text input with radio button" value={taskName} onChange={e => setTaskName(e.target.value)} />
                    <select onChange={(e) => setProjectId(e.target.value)} className="custom-select">
                        {
                            projects.map(project => {
                                return (
                                    <option value={project.id}>{project.name}</option>
                                )
                            })
                        }
                    </select>
                    <InputGroup.Radio checked={isPriority} onClick={() => setIsPriority(isPriority => !isPriority)} aria-label="Radio button for following text input" />
                </InputGroup>
            </Form>
            <ProgressBar now={progres} />
            <ListGroup as="ul">
                {
                    tasks.map((task) => {
                        return (
                            <Task task={task} />
                        )
                    })
                }
            </ListGroup>
        </div >
    )
}

export default Tasks;