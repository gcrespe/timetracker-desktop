import { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import dev from './assets/code_login.svg'
import './App.css';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form , Alert, Spinner} from 'react-bootstrap';
import { inject, observer } from 'mobx-react'

const App = inject('login')(observer((props) => {

  const { login } = props;
  
  const history = useHistory();
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLoginClick = async () => {

    setLoading(true)

    try {

      const response = await login.makeLogin(email, password)
      login.setUserInfo(response);
      setLogged(true);

    }catch(e){

      setLoginError(true);

    }finally{

      history.push("/home");
      if(isLoading) setLoading(false)
    
    }
    


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
              onClick={() => handleLoginClick() }>
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
}))

export default App;
