import './NewTask.css'
import SideMenu from '../../components/SideMenu/SideMenu.jsx'
import newTask from '../../assets/newTask.svg'
import { Form } from 'react-bootstrap';

const NewTask = () => {

    const options = ["Issue", "Incident", "Bugfix"]

    return (
        <div className="Page">
            <SideMenu />
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
                        <div className="NewTaskFormInner">
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label style={{marginLeft: 10}}>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title" style={{heigth: '10vh'}}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{marginLeft: 10}}>Type</Form.Label>
                                    <Form.Control as="select" style={{width: '60%'}}>
                                        {options.map((option) => 
                                            <option>{option}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{marginLeft: 10}}>Description</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Enter description"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicRange" style={{color: "#ffffff"}}>
                                    <Form.Label style={{marginLeft: '10px'}} >Priority</Form.Label>
                                    <Form.Control type="range" />
                                </Form.Group>
                                
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTask;