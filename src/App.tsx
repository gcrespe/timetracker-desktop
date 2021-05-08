import './App.css';
import time from './assets/timeManagement.svg'
import focus from './assets/focus.svg'
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="LoginArea">
        <div style={{paddingBottom: '10%'}}>
          <h1>
            TimeTracker
          </h1>
        </div>
        <div className="loginForm">
          <img src={focus} style={{width: '70%', height: '70%'}}/>
          <div style={{paddingBottom: '5%' }}>
            <InputGroup className="mb-3" style={{ }}>
              <FormControl
                placeholder="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div style={{paddingBottom: '5%'}}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                type="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <Button variant="primary" size="sm" style={{width: '100%'}}>Login </Button> 
        </div>
      </div>
      <div className="imageArea">
        <img src={time} style={{width: '70%', height: '80%', paddingTop: "15%"}}/>
      </div>
    </div>
  );
}

export default App;
