import { useState } from 'react';
import logo from './assets/logo.svg';
import dev from './assets/code_login.svg'
import './App.css';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

function App() {

  const history = useHistory();
  const [loginTry, setLoginTry] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setLoginTry(!loginTry);
    history.push("/home");
  }

  return (
    <div className="LoginWrapper">
      <div className="LoginSection">
        <div className="FormArea">
          <div style={{width: '100%', height: '10%'}}>
            <img src={dev} className="dev-home" alt="logo" />
          </div>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" onChange={(a) => setUsername(a)}/>
              <Form.Text className="text-muted" style={{fontSize: 10}}>
                We'll never share your email or password with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
          <>
            <style type="text/css">
              {`
              .btn-outline-secondary {
                border-color: #181c22;
                color: #181c22;
              }
              .btn-outline-secondary:hover {
                background-color: #181c22;
                color: #ffffff;
                border-color: #181c22;
              }
              `}
            </style>
            <Button style={{width: '100%' }}
              variant="outline-secondary"
              onClick={() => handleLoginClick(true) }>
              Login
            </Button>
          </>
        </div>
        <div style={{fontSize: 12, color: '#47566b', marginTop: '20%'}}>
          Powered by: TTDevTeam
        </div>
      </div>
      <div className="ImageSection">
        <div className="ImageText">
          asdasd
        </div>
        <div className="LogoWrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
