import { useState } from 'react' 
import './TaskList.css'
import { Button, ListGroup, Card, ListGroupItem} from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom'

const TaskList = inject('taskList', 'login')(observer((props) => {

    const { taskList, login } = props;

    const [selectedIssueDetails, setSelectedIssueDetails] = useState(0);
    const [taskListState, setTaskListState] = useState(taskList.taskList)

    const doAssignIssue = () => {

        var tasks = taskListState;

        tasks[selectedIssueDetails].assignee = login.userInfo.nome;

        setTaskListState(tasks);

        taskList.setTaskList(taskListState);

    }

    return (
        <div className="Page">
            <div className="HomeSectionTaskList">
                <div className="List">
                    <ListGroup horizontal style={{width: '100%', backgroundColor: '#000000', fontSize: '12px', height: '6vh'}}>
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
                                    <ListGroup.Item style={{width: '15%', backgroundColor: '#ffffff', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.assignee}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '28%', backgroundColor: '#ffffff', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.title}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '22%', backgroundColor: '#ffffff', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.dueDate}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', backgroundColor: '#ffffff', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.project}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '13%', backgroundColor: '#ffffff', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.sprint}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', backgroundColor: '#ffffff', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>
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
                                <Button style={{width: '100%', height: '50%'}} variant="outline-secondary">
                                <div style={{marginTop: "-5px"}}>
                                    Cancel
                                </div>
                                </Button>
                            </>
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
                                    <div style={{marginTop: "-5px"}}>
                                        Pick
                                    </div>
                                </Button>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}))

export default TaskList;