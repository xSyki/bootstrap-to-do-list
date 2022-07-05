import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Projects from './Components/Projects';
import Tasks from './Components/Tasks';

function App() {
  const [key, setKey] = useState('tasks');

  return (
    <div className='w-100 h-100 p-5'>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k ? k : "tasks")}
        className="mb-3 d-flex justify-content-center align-items-center"
      >
        <Tab eventKey="tasks" title="Tasks">
          <Tasks />
        </Tab>
        <Tab eventKey="projects" title="Projects">
          <Projects />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
