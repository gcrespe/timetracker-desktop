import { useState } from 'react'
import './Profile.css'
import { FormControl, InputGroup, Form, Button, Spinner, Toast } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import profile from '../../assets/profile.png';
import loc from '../../assets/locationIcon.png'

const Profile = inject('login')(observer((props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [notification, setNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState("")
    const { login } = props;

    const handleUpdateProfileInfo = () => {

        setIsLoading(true)

        setTimeout(() => {


            setNotificationMessage("Successfully updated profile info"); setNotification(true)
            setIsLoading(false)

        }, 2000);

    }

    return (
        <div className="Page">
            <div className="ProfileHomeSection">
                <div className="ProfileHeaderWrapper">
                    <div className="ProfileHeader">
                        <div className="ProfilePicture">
                            <div style={{width: '100%', height: '100%', borderRadius: '50%'}}>
                                <img src={profile} className="profile-picture" alt="logo" style={{marginTop: '15%'}}/>
                            </div>
                        </div>
                        <div className="ProfileName">
                                {login.userInfo.nome}, 24
                            <div className="ProfileText">
                                <img src={loc} className="dev-home" alt="logo" />
                                São Paulo
                            </div>
                        </div>           
                    </div> 
                </div>
                <div className="ProfileBody">
                    <InputGroup className="mb-3">
                        <InputGroup.Text style={{backgroundColor: '#dbe2ef', border: 'none', color: '#ffffff'}}>Primeiro e segundo nome</InputGroup.Text>
                        <FormControl aria-label="First name" placeholder={login.userInfo.nome.split(" ")[0]}/>
                        <FormControl aria-label="Last name" placeholder={login.userInfo.nome.split(" ")[1]}/>
                    </InputGroup>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <InputGroup className="mb-3" style={{width: '35%'}}>
                            <InputGroup.Text style={{backgroundColor: '#dbe2ef', border: 'none', color: '#ffffff'}}>Data de registro</InputGroup.Text>
                            <FormControl aria-label="First name" placeholder={"22/05/2021"} disabled/>
                        </InputGroup>
                        <InputGroup className="mb-3" style={{width: '35%'}}>
                            <InputGroup.Text style={{backgroundColor: '#dbe2ef', border: 'none', color: '#ffffff'}}>Data de nascimento</InputGroup.Text>
                            <FormControl aria-label="First name" placeholder={"04/04/1997"}/>
                        </InputGroup>
                        <div style={{width: '23%'}}>

                        </div>
                    </div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text style={{backgroundColor: '#dbe2ef', border: 'none', color: '#ffffff'}}>Gênero</InputGroup.Text>
                            <Form.Check
                                inline
                                label="Male"
                                name="group1"
                                type={"radio"}
                                id={`inline-radio-1`}
                                style={{marginLeft: '2%'}}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="group1"
                                type={"radio"}
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label="Undefined"
                                name="group1"
                                type={"radio"}
                                id={`inline-radio-1`}
                            />
                            <InputGroup.Text style={{marginLeft:'5%', backgroundColor: '#dbe2ef', border: 'none', color: '#ffffff'}}>Endereço de email</InputGroup.Text>
                            <FormControl aria-label="First name" placeholder={"gcrespe3@hotmail.com"}/>
                    </InputGroup>
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