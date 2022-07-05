import { InputGroup, Form } from 'react-bootstrap';

function Projects() {
    return (
        <div>
            <InputGroup>
                <Form.Control aria-label="Text input with radio button" />
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#ffffff"
                    title="Choose your color"
                />
            </InputGroup>
        </div>
    )
}

export default Projects;