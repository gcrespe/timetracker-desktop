import { useState } from 'react';
import './Profile.css'
import profile from '../../assets/profile.png';
import SideMenu from '../../components/SideMenu/SideMenu.jsx'
import { Tab, Row, Card, Accordion } from 'react-bootstrap'

const Profile = () => {

    return (
        <div className="Page">
            <div className="ProfileHomeSection">
                <div className="ProfileHeaderWrapper">
                    <div className="ProfileHeader">
                        <div className="ProfilePicture">
                            <div style={{width: '100%', height: '100%', borderRadius: '50%'}}>
                                <img src={profile} className="profile-picture" alt="logo" color="#ffffff" style={{marginTop: '15%'}}/>
                            </div>
                        </div>
                        <div className="ProfileName">
                            Giuliano Crespe
                            <div className="ProfileText">
                                25, São Paulo
                            </div>
                            <div className="ProfileText">
                                288 total tasks done
                            </div>
                            <div className="ProfileText">
                                198 total days worked
                            </div>
                            <div className="ProfileText">
                                1 days until next version (Project X)
                            </div>
                        </div>           
                    </div> 
                </div>
                
                <div className="ProfileBody">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row style={{width: '100%', height: '80%', paddingTop: '5%'}}>
                            <Tab.Content style={{justifyContent: 'center', width: '100%', marginLeft: '3%'}}>
                                <div style={{width: '100%', backgroundColor: '#dbe2ef'}}>
                                    <Tab.Pane eventKey="first">
                                        <Accordion defaultActiveKey="0">
                                            <Card  style={{backgroundColor: '#dbe2ef', borderColor: '#dbe2ef'}}>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    Work Information
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                <Card.Body style={{backgroundColor: '#f9f7f7', height: '38vh', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', border: 'none'}}>Hello! I'm the body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card  style={{backgroundColor: '#dbe2ef', borderColor: '#dbe2ef'}}>
                                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                                    Security
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                <Card.Body style={{backgroundColor: '#f9f7f7', height: '38vh', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>Hello! I'm the body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card  style={{backgroundColor: '#dbe2ef', borderColor: '#dbe2ef'}}>
                                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                                    Configurations
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2">
                                                <Card.Body style={{backgroundColor: '#f9f7f7', height: '38vh', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>Hello! I'm the body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Tab.Pane>
                                </div>
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </div> 
            </div>
        </div>
    );
}

export default Profile;