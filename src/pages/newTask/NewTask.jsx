import { useState } from 'react'
import './NewTask.css'
import SideMenu from '../../components/SideMenu/SideMenu.jsx'
import newTask from '../../assets/newTask.svg'
import { Button, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const NewTask = () => {

    const options = ["Issue", "Incident", "Bugfix"]
    const sprints = ["Sprint 1", "Sprint 2", "Sprint 3"]

    const [opacity, setOpacity] = useState('100%');

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="Page">
            <div className="HomeSection">
                <div className="Title">
                    <div className="tit1">
                        Add a new task.
                    </div>
                    <div className="tit2">
                        <img src={newTask} className="NewTaskIcon" alt="logo" />
                    </div>
                </div>
                <div className="Body">
                    <div className="NewTaskForm">
                        <div className="NewTaskFormInner" style={{opacity: opacity}}>
                            <Form style={{justifyContent: 'space-between', height: '90%', width: '100%', display: 'flex', flexDirection: 'column'}}>
                                <Form.Group controlId="formUsername" style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                                    <Form.Label style={{width: '12%', paddingTop: '1%'}}>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title" style={{heigth: '10vh'}} size="sm"/>
                                </Form.Group>
                                <Form.Group style={{flexDirection: 'row', display: 'flex'}}>
                                    <Form.Label style={{width: '10.6%', paddingTop: '1%'}}>Type</Form.Label>
                                    <Form.Control as="select" style={{width: '89.4%'}} size="sm" >
                                        {options.map((option) => 
                                            <option>{option}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label >Description</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Enter description" size="sm"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicRange" style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                                    <Form.Label style={{width: '15%', paddingTop: '1%'}}>Priority</Form.Label>
                                    <Form.Control type="range" size="sm"/>
                                </Form.Group>
                                <Form.Group style={{flexDirection: 'row', display: 'flex'}} size="lg">
                                    <Form.Label style={{width: '28%', paddingTop: '1%'}} >Refering Sprint</Form.Label>
                                    <Form.Control as="select" style={{width: '72%'}} size="sm">
                                        {sprints.map((sprint) => 
                                            <option>{sprint}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="NewTaskForm2">
                        <div className="NewTaskFormInner" style={{opacity: opacity}}>
                            <Form style={{justifyContent: 'space-between', height: '90%', width: '100%', display: 'flex', flexDirection: 'column'}}>
                                <Form.Group controlId="formUsername" style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                                    <Form.Label style={{width: '12%', paddingTop: '1%'}}>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title" style={{heigth: '10vh'}} size="sm"/>
                                </Form.Group>
                                <Form.Group style={{flexDirection: 'row', display: 'flex'}}>
                                    <Form.Label style={{width: '10.6%', paddingTop: '1%'}}>Type</Form.Label>
                                    <Form.Control as="select" style={{width: '89.4%'}} size="sm" >
                                        {options.map((option) => 
                                            <option>{option}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                                <div style={{height: '30%', display: 'flex', flexDirection: 'row'}}>
                                    <div style={{width: '50%'}}>
                                        Due date
                                    </div> 
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp"/>
                                </div>
                                <div style={{width: '110%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '11vh'}}>
                                    <div style={{display: 'flex', alignItems: 'flex-end', width: '50%'}}>
                                        <Button style={{width: '80%'}}
                                            variant="outline-danger"
                                            onClick={() => setOpacity('100%')}>
                                            Cancel
                                        </Button>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'flex-end', width: '50%', marginLeft: '10%'}}>
                                        <Button style={{width: '80%'}}
                                            variant="outline-secondary"
                                            onClick={() => setOpacity('100%')}>
                                            Continue
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>                 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTask;