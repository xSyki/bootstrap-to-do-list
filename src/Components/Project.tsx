import { InputGroup, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import projectInterface from "../Interfaces/projectInterface";

interface projectComponentInterface {
    project: projectInterface
}

function Project(props: projectComponentInterface) {

    const { project } = props;

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
                    <div style={{ color: `${project?.color}` }} className="fw-bold">{project.name}</div>
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
        </div>
    )
}

export default Project;