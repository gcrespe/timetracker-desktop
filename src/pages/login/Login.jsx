import { useState } from 'react';
import logo from '../../assets/logo.png';
import dev from '../../assets/logoSimplesPrincipal.png'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, Spinner, Toast, Modal, InputGroup, FormControl} from 'react-bootstrap';
import { inject, observer } from 'mobx-react'

const Login = inject('login')(observer((props) => {

    const { login } = props;
    
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isLoadingModal, setLoadingModal] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const [show, setShow] = useState(false);

    const handleCloseModal = () => {

      setLoadingModal(true)
      
      setTimeout(() => {

        setLoadingModal(false); 
        setShow(false)

      }, 2000);
      
    };
  
    const handleLoginClick = async () => {
  
      setLoading(true);
  
      try {
  
        var response;
  
        if(validateEmail(email) && password.length >= 8)
        response = await login.makeLogin(email, password)
  
        setTimeout(() => {
  
          if(response) history.push("/home");
          else setLoginError(true);
  
          setLoading(false); 
  
        }, 6000);
        
        
  
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
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Esqueci minha senha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              Insira seu e-mail no input abaixo, e enviaremos um e-mail com uma nova senha.
            </div>
            <InputGroup className="mb-3" style={{marginTop: '20px'}}>
                <FormControl aria-label="E-mail" placeholder={"E-mail"}/>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="outline-secondary" style={{width: '25%'}} onClick={handleCloseModal}>
              {isLoadingModal ? 
                    <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Send email'} 
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="LoginSection">
          <div className="FormArea">
            <div style={{width: '100%', height: '10%'}}>
              <img src={dev} className="dev-home-login" alt="logo" />
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
                .btn-outline-secondary:disabled {
                  background-color: #5b6066;
                  color: #e0e0e0;
                  border-color: #585a5c;
                }
                `}
              </style>
              <Button style={{width: '100%'}}
                variant="outline-secondary"
                disabled={isLoading || password.length < 8 || email.length < 10}
                active={isLoading}
                onClick={() => handleLoginClick()}>
                {isLoading ? 
                  <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Login'}
              </Button>
              <Link style={{color: '#112d4e', marginTop: '-40%'}} onClick={() => setShow(true)}>
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

  export default Login
  