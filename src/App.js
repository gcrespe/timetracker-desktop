import { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import dev from './assets/code_login.svg'
import './App.css';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form , Alert, Spinner} from 'react-bootstrap';

function App() {

  const history = useHistory();
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        history.push("/home");
      });
    }
  }, [isLoading]);

  const handleLoginClick = () => {
    setLogged(true);
    if(!isLoading) setLoading(true)
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
                border-color: #112d4e;
                color: #112d4e;
              }
              .btn-outline-secondary:hover {
                background-color: #112d4e;
                color: #ffffff;
                border-color: #112d4e;
              }
              `}
            </style>
            <Button style={{width: '100%'}}
              variant="outline-secondary"
              disabled={isLoading}
              active={isLoading}
              onClick={() => handleLoginClick(true) }>
              {isLoading ? 
                <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Login'}
            </Button>
          </>
        </div>
        <div style={{fontSize: 12, color: '#47566b', marginTop: '20%'}}>
          Powered by: TTDevTeam
        </div>
      </div>
      <div className="ImageSection">
        <div className="LogoWrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
