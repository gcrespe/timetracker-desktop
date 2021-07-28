import { useState } from 'react';
import logo from './assets/logo.svg';
import dev from './assets/code_login.svg'
import './App.css';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form , Alert, Spinner, Toast} from 'react-bootstrap';
import { inject, observer } from 'mobx-react'

const App = inject('login')(observer((props) => {

  const { login } = props;
  
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLoginClick = async () => {

    setLoading(true);

    try {

      var response;

      console.log(validateEmail(email))

      if(validateEmail(email) && password.length >= 8)
        response = await login.makeLogin(email, password)
      else setLoginError(true)

      setTimeout(() => {
        
        if(response) history.push("/home");
        else setLoginError(true);

        setLoading(false); 

      }, 2000);
      
      

    }catch(e){

      setLoginError(true);

    }

  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
              <Form.Control type="email" placeholder="Enter email" onChange={(a) => setEmail(a.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" onChange={(a) => setPassword(a.target.value)}/>
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
              onClick={() => handleLoginClick()}>
              {isLoading ? 
                <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Login'}
            </Button>
              <Link style={{color: '#112d4e', marginTop: '-40%'}}>
                Forgot my password
              </Link>
          </>
        </div>
        <div style={{fontSize: 12, color: '#47566b', marginTop: '20%'}}>
          Powered by: TTDevTeam
        </div>
      </div>
      <div className="ImageSection">
        <>
          <Toast onClose={() => setLoginError(false)} show={loginError} delay={3000} autohide style={{position: 'absolute', right: '0', top: '0', margin: '20px'}}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto" style={{width: '65%', textAlign: 'left'}}>Notification</strong>
              <small style={{width: '25%', right: '0'}}>Just now</small>
            </Toast.Header>
            <Toast.Body>An error ocurred during the login procces.</Toast.Body>
          </Toast>
        </>
        <div className="LogoWrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}))

export default App;
