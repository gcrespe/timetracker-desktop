import { useState } from 'react';
import logo from '../../assets/logo.png';
import dev from '../../assets/logoSimplesPrincipal.png'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, Spinner, Toast, Modal, InputGroup, FormControl, Tabs, Tab} from 'react-bootstrap';
import { inject, observer } from 'mobx-react'
import DatePicker from 'react-datepicker'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom.jsx'

const Login = inject('login')(observer((props) => {

    const { login } = props;
    
    const history = useHistory();
	const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
	const [passwordRepeat, setPasswordRepeat] = useState("")
    const [isLoading, setLoading] = useState(false);;


	const [loginMessage, setLoginMessage] = useState("");
    const [loginError, setLoginError] = useState(false);

	const [isLoadingModalForgotPassword, setLoadingModalForgotPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassord] = useState(false);

	const [isLoadingModalRegister, setLoadingModalRegister] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	
	const [startDate, setStartDate] = useState(new Date());

	const [key, setKey] = useState("account");

    const handleCloseModalForgotPassword = () => {

		setLoadingModalForgotPassword(true)
      
      	setTimeout(() => {

        	setLoadingModalForgotPassword(false); 
        	setShowForgotPassord(false)

      	}, 2000);
      
    };
  
    const handleLoginClick = async () => {
  
      	setLoading(true);
  
      	try {

        	var response = await login.makeLogin(username, password);
        	console.log(response);
        
        	if(response === 200){

          		history.push("/home");

        	}else {
				setLoginMessage("Ocorreu um erro ao realizar o login")
				setLoginError(true);
			}
        
    	}catch(e){
  
			setLoginMessage("Ocorreu um erro ao realizar o login")
        	setLoginError(true);
  
    	}

		setLoading(false)

    }

	const handleRegister = async () => {
  
		setLoadingModalRegister(true);

		try {

		  var response = await login.register(email, username, password, passwordRepeat);
		  console.log(response);
	  
		  if(response === 201){

				setLoginMessage("Registro realizado")
				setLoginError(true);
				setLoadingModalRegister(false);


		  }else {

			if(password != passwordRepeat){
				setLoginMessage("As senhas devem ser iguais")
				setLoginError(true);
			}else {

				setLoginMessage("Ocorreu um erro ao efetuar o registro")
				setLoginError(true);

			}

		  }

	  	}catch(e){

			setLoginMessage("Ocorreu um erro ao efetuar o registro")
			setLoginError(true);

	  	}

		setLoadingModalRegister(false);
		setShowRegister(false);
		setEmail("");
		setUsername("");
		setPassword("");

		setKey("account")
  }

	const closeModal = () => {
		
		setLoadingModalRegister(false); 
        setShowRegister(false);
		setLoadingModalForgotPassword(false); 
        setShowForgotPassord(false);

	}
  
    return (
      	<div className="LoginWrapper">

			{/**MODAL ESQUECI MINHA SENHA*/}
        	<Modal show={showForgotPassword} onHide={() => closeModal()}>
          		<Modal.Header closeButton>
            		<Modal.Title>Esqueci minha senha</Modal.Title>
          		</Modal.Header>
				<Modal.Body>
					<div>
					Insira seu e-mail abaixo, e enviaremos um e-mail com uma nova senha.
					</div>
					<InputGroup className="mb-3" style={{marginTop: '20px'}}>
						<FormControl aria-label="E-mail" placeholder={"E-mail"}/>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" style={{width: '25%'}} onClick={handleCloseModalForgotPassword}>
					{isLoadingModalForgotPassword ? 
							<Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Enviar email'} 
					</Button>
				</Modal.Footer>
        	</Modal>

			{/**MODAL REGISTRO*/}
			<Modal show={showRegister} onHide={() => closeModal()} style={{ heigth: '60vh'}}>
          		<Modal.Header closeButton>
            		<Modal.Title>Realizar registro</Modal.Title>
          		</Modal.Header>
				<Tabs defaultActiveKey="profile" activeKey={key} variant='pills' className="mb-3" style={{border: 'none', justifyContent: 'space-evenly', marginTop: '5%'}}>
					<Tab eventKey="account" title="Informações da conta" disabled={key != "account"}>
						<Modal.Body style={{alignContent: 'center'}}>
							<InputGroup className="mb-3" style={{marginTop: '20px'}}>
								<FormControl aria-label="Usuário" placeholder={"Usuário"} onChange={(e) => setUsername(e.target.value)}/>
							</InputGroup>
							<InputGroup className="mb-3" style={{marginTop: '20px'}}>
								<FormControl aria-label="Senha" type="password" placeholder={"Senha"} onChange={(e) => setPassword(e.target.value)}/>
							</InputGroup>
							<InputGroup className="mb-3" style={{marginTop: '20px'}}>
								<FormControl aria-label="Senha" type="password" placeholder={"Digite a senha novamente"} onChange={(e) => setPasswordRepeat(e.target.value)}/>
							</InputGroup>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="outline-secondary" style={{width: '25%'}} onClick={() => setKey("user")}>
								Próximo
							</Button>
						</Modal.Footer>
					</Tab>
					<Tab eventKey="user" title="Informações do usuário" disabled={key != "user"} >
						<Modal.Body style={{alignContent: 'center'}}>
							<InputGroup className="mb-2" style={{marginTop: '20px'}}>
								<FormControl aria-label="Primeiro Nome" placeholder={"Nome"} onChange={(e) => setEmail(e.target.value)}/>
							</InputGroup>
							<InputGroup className="mb-2" style={{marginTop: '20px'}}>
								<FormControl aria-label="E-mail" placeholder={"E-mail"} onChange={(e) => setEmail(e.target.value)}/>
							</InputGroup>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="outline-secondary" style={{width: '25%'}} onClick={() => setKey("account")}>
								Voltar
							</Button>
							<Button variant="outline-secondary" style={{width: '25%'}} onClick={() => handleRegister()}>
								{isLoadingModalRegister ? 
									<Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Registrar'} 
							</Button>
						</Modal.Footer>
					</Tab>
				</Tabs>
        	</Modal>
        <div className="LoginSection">
        	<div className="FormArea">
				<div style={{width: '100%', height: '10%'}}>
					<img src={dev} className="dev-home-login" alt="logo" />
				</div>
				<Form>
					<Form.Group controlId="formUsername">
						<Form.Control type="email" placeholder="Username" onChange={(a) => setUsername(a.target.value)}/>
					</Form.Group>
					<Form.Group controlId="formPassword">
						<Form.Control type="password" placeholder="Password" onChange={(a) => setPassword(a.target.value)}/>
					</Form.Group>
					<Link style={{color: '#112d4e', fontSize: '12px', marginRight: '45%'}} onClick={() => setShowForgotPassord(true)}>
						Esqueceu sua senha?
					</Link>
				</Form>
        	<div className="FormButtons">
				<ButtonCustom
					onClick={() => handleLoginClick()}
					text={isLoading ? 
						<Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Login'}
					width={'100%'}
					height={'28%'}
					disabled={isLoading || password.length < 6 || username.length < 6}
					active={isLoading}
				/>
				<ButtonCustom
					onClick={() => setShowRegister(true)}
					text={"Register"}
					width={'100%'}
					height={'28%'}
				/>
            </div>
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
					<Toast.Body>{loginMessage}</Toast.Body>
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
  