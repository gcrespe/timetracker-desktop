import { useState } from 'react' 
import './TaskList.css'
import { Button, ListGroup, Card, ListGroupItem, Toast, Spinner} from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

const TaskList = inject('taskList', 'login')(observer((props) => {

    const { taskList, login } = props;

    const [selectedIssueDetails, setSelectedIssueDetails] = useState(0)
    const [taskListState, setTaskListState] = useState(taskList.taskList)
    const [loading, setLoading] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState("")
    const [notification, setNotification] = useState(false)

    const doAssignIssue = () => {

        setLoading(true)
        
        setTimeout(() => {

            if(taskList.selectedTask == null){

                var tasks = taskListState;

                tasks[selectedIssueDetails].assignee = login.userInfo.nome;

                setTaskListState(tasks);

                taskList.setTaskList(taskListState);
                taskList.setSelectedTask(tasks[selectedIssueDetails])

                setNotificationMessage("Task was assigned to you successfully")
                setNotification(true);

                setLoading(false)

            }else {

                setNotificationMessage("You already have an ongoing task")
                setNotification(true);
                setLoading(false)
                
            }
            
            

        }, 2000);

    }

    return (
        <div className="Page">
            <div className="HomeSectionTaskList">
                <div className="List">
                    <ListGroup horizontal style={{width: '100%', backgroundColor: '#ffffff', fontSize: '12px', height: '6vh'}}>
                        <ListGroup.Item style={{width: '15%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Assigne</ListGroup.Item>
                        <ListGroup.Item style={{width: '28%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Title</ListGroup.Item>
                        <ListGroup.Item style={{width: '22%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Due date</ListGroup.Item>
                        <ListGroup.Item style={{width: '17%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Project</ListGroup.Item>
                        <ListGroup.Item style={{width: '13%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Sprint</ListGroup.Item>
                        <ListGroup.Item style={{width: '17%', borderWidth: '1px', border: 'none', backgroundColor: '#ffffff'}}></ListGroup.Item>
                    </ListGroup>
                    <div className="ListItems" id="style-2">
                        { taskListState.map( (task, index) => {
                            return (
                                <ListGroup className="ListGroup" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', justifyContent: 'center', alignContent: 'center', height: '10vh', paddingTop: '3px'}}>
                                    <ListGroup.Item style={{width: '15%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.assignee}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '28%', paddingTop: '20px', border: 'none', borderBottom: task.state == 'DONE' ? '1.5px solid green' : '0px', color: '#aaaaaa'}}>{task.title}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '22%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.dueDate}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.project}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '13%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.sprint}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>
                                            <>
                                                <style type="text/css">
                                                {`
                                                .btn-outline-primary {
                                                    border-color: #dbe2ef;
                                                    color: #000000;
                                                }
                                                .btn-outline-primary:hover {
                                                    background-color: #dbe2ef;
                                                    color: #000000;
                                                    border-color: #dbe2ef;
                                                }
                                                `}
                                                </style>
                                                <Button 
                                                    variant="outline-primary"
                                                    style={{fontSize: '10px', height: '5vh', marginTop: '-10px', width: '80%'}}
                                                    onClick={() => setSelectedIssueDetails(index)}>
                                                Details
                                                </Button>
                                            </>
                                    </ListGroup.Item>
                                </ListGroup>
                            )
                        })}
                    </div>
                </div>
                <div className="Resume">
                    <div className="Title">
                        Issue Details
                    </div>
                    <div className="IssueDescription">
                        { taskListState.map( (task, index) => {
                            if (index == selectedIssueDetails)
                                return (
                                    <div style={{overflowY: 'scroll', height: '28.5rem', marginTop: '2%'}}>
                                        <Card style={{ width: '17rem' , border: 'none' }} className="text-left">
                                            <Card.Body>
                                                <Card.Title>{task.title}</Card.Title>
                                            <Card.Text>
                                                {task.description}
                                            </Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush" style={{marginLeft: '5%'}}>
                                                <ListGroupItem>Creator: {task.creator} </ListGroupItem>
                                                <ListGroupItem>{task.project} </ListGroupItem>
                                                <ListGroupItem>{task.sprint} - {task.priority} priority</ListGroupItem>
                                                <ListGroupItem>Due date: {task.dueDate} </ListGroupItem>
                                            </ListGroup>
                                            <Card.Body>
                                                <Card.Title>Additional information</Card.Title>
                                                <Card.Text>
                                                    {task.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                        })}
                    </div>
                    <div className="ControlButtons">
                        <div className="ControlButton">
                        </div>
                        <div className="ControlButton">
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
                                <Button style={{width: '100%', height: '50%', opacity: taskListState[selectedIssueDetails].assignee == "" ? 1 : 0.3}} 
                                        variant="outline-secondary" 
                                        disabled={taskListState[selectedIssueDetails].assignee == "" ? false : true}
                                        onClick={() => doAssignIssue()}>
                                            <div style={{marginTop: '-5%'}}>
                                            {loading ? 
                                                <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Pick'}    
                                            </div>
                                </Button>
                            </>
                        </div>
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
        </div>
    );
}))

export default TaskList;