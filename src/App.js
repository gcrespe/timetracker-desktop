import { useState } from 'react';
import logo from './assets/logo.svg';
import dev from './assets/code_login.svg'
import './App.css';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';

function App() {

  const history = useHistory();
  const [loginTry, setLoginTry] = useState(false);

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
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted" style={{fontSize: 11}}>
                We'll never share your email or password with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
          <Button style={{width: '100%' }}
            onClick={ () => handleLoginClick(true) }>
            Login
            <Link to="/home"></Link>
          </Button>
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
