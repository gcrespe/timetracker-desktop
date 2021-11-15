import { useState, useEffect } from 'react'
import './Profile.css'
import { FormControl, InputGroup, Form, Button, Spinner, Toast } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import profile from '../../assets/profile.png';
import loc from '../../assets/locationIcon.png'

const Profile = inject('login')(observer((props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [notification, setNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const { login } = props;

    async function handleUpdateProfileInfo(){

        setIsLoading(true)

        const newUsername = username;

        try {

            await login.updateProfileInfo(
                username,
                email,
                password,
                newPassword
            )
            
            setTimeout(() => {

                console.log("" + newUsername)

                login.getProfileInfo(newUsername)

                setNotificationMessage("Informações atualizadas"); setNotification(true)
                setIsLoading(false)

            }, 2000);

        }catch(e){

            setNotificationMessage("Não foi possível atualizar as informações"); setNotification(true)
            setIsLoading(false)

        }
        
    }

    useEffect(() => {
        
        setUsername(login.userInfo.username)
        setEmail(login.userInfo.email)

    }, [])

    return (
        <div className="Page">
            <div className="ProfileHomeSection">
                { isLoading ?
                    <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/>
                  :
                    <>
                        <div className="ProfileHeaderWrapper">
                            <div className="ProfileHeader">
                                <div className="ProfilePicture">
                                    <div style={{width: '100%', height: '100%', borderRadius: '50%'}}>
                                        <img src={profile} className="profile-picture" alt="logo" style={{marginTop: '15%'}}/>
                                    </div>
                                </div>
                                <div className="ProfileName">
                                        {login.userInfo.username}
                                    <div className="ProfileText">
                                        <img src={loc} className="dev-home" alt="logo" />
                                        São Paulo
                                    </div>
                                </div>           
                            </div> 
                        </div>
                        <div className="ProfileBody">
                            <InputGroup className="mb-3">
                                <InputGroup.Text style={{backgroundColor: '#dbe2ef', border: 'none', color: '#ffffff'}}>Nome de usuário</InputGroup.Text>
                                <FormControl aria-label="First name" placeholder={login.userInfo.username} onChange={(e) => setUsername(e.target.value)}/>
                            </InputGroup>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <InputGroup className="mb-3" style={{width: '60%'}}>
                                    <InputGroup.Text style={{backgroundColor: '#dbe2ef', border: 'none', color: '#ffffff'}}>Endereço de email</InputGroup.Text>
                                    <FormControl aria-label="First name" placeholder={login.userInfo.email} onChange={(e) => setEmail(e.target.value)}/>
                                </InputGroup>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <div style={{width: '38%'}}></div>
                                <InputGroup className="mb-3" style={{width: '29%'}}>
                                    <FormControl aria-label="First name" placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
                                </InputGroup>
                                <InputGroup className="mb-3" style={{width: '29%'}}>
                                    <FormControl aria-label="First name" placeholder={"Nova senha"} type="password" onChange={(e) => setNewPassword(e.target.value)}/>
                                </InputGroup>
                                
                            </div>
                            <InputGroup className="mb-3" style={{display: 'flex', flexDirection: 'row'}}>
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
                                    <div style={{width: '90%'}} />
                                    <Button style={{width: '10%'}}
                                        variant="outline-secondary"
                                        disabled={isLoading}
                                        active={isLoading}
                                        onClick={ () => handleUpdateProfileInfo()}>
                                        {isLoading ? 
                                        <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Atualizar'}
                                    </Button>
                                </>
                            </InputGroup>
                        </div>
                    </>
                    } 
            </div>
            <>
                <Toast onClose={() => setNotification(false)} show={notification} delay={3000} autohide style={{position: 'absolute', right: '0', top: '0', margin: '20px'}}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto" style={{width: '65%', textAlign: 'left'}}>Notification</strong>
                        <small style={{width: '25%', right: '0'}}>Just now</small>
                    </Toast.Header>
                    <Toast.Body>{notificationMessage}</Toast.Body>
                </Toast>
            </>
        </div>
    );
}));

export default Profile;