import { useState, useEffect } from 'react';

import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';

import { InputGroup, Form, ProgressBar, ListGroup, Button } from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';

import Task from './Task';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: State) => state.tasks);
    const projects = useSelector((state: State) => state.projects);

    const { addNewTask } = bindActionCreators(actionCreators, dispatch);

    const [taskName, setTaskName] = useState("");
    const [isPriority, setIsPriority] = useState(false);
    const [projectId, setProjectId] = useState(projects.length ? projects.filter(project => !project.isDone)[0].id : "");

    useEffect(() => {
        setProjectId(projects.length ? projects.filter(project => !project.isDone)[0].id : "");
    }, [projects])

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

    const progres = (tasks.filter(task => task.isDone).length / tasks.length) * 100;

    return (
        <div className='d-flex flex-column gap-3'>
            <Form onSubmit={e => tryAddNewTask(e)}>
                <InputGroup>
                    <Button variant="outline-secondary" onClick={tryAddNewTask}>
                        +
                    </Button>
                    <Form.Control value={taskName} onChange={e => setTaskName(e.target.value)} className="w-50" />
                    <Form.Select value={projectId} onChange={e => setProjectId(e.target.value)} className="custom-select">
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
                    <Button variant="outline-secondary" onClick={() => setIsPriority(isPriority => !isPriority)}>
                        <Form.Check type="radio" checked={isPriority} />
                    </Button>
                </InputGroup>
            </Form>
            <ProgressBar now={progres} />
            <ListGroup as="ul">
                {
                    tasks.map((task) => {
                        return <Task key={task.id} task={task} />
                    })
                }
            </ListGroup>
        </div >
    )
}

export default Tasks;