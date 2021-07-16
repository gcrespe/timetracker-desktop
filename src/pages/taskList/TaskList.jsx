import {useState} from 'react'
import './TaskList.css'
import { Button, ListGroup } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

const TaskList = inject('taskList')(observer((props) => {

    const { taskList } = props;

    return (
        <div className="Page">
            <div className="HomeSectionTaskList">
                <div className="List">
                    <ListGroup horizontal style={{width: '100%', backgroundColor: '#000000', fontSize: '12px', height: '6vh'}}>
                        <ListGroup.Item style={{width: '15%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#f9f7f7'}}>Number</ListGroup.Item>
                        <ListGroup.Item style={{width: '28%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#f9f7f7'}}>Title</ListGroup.Item>
                        <ListGroup.Item style={{width: '22%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#f9f7f7'}}>Due date</ListGroup.Item>
                        <ListGroup.Item style={{width: '17%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#f9f7f7'}}>Project</ListGroup.Item>
                        <ListGroup.Item style={{width: '13%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#f9f7f7'}}>Sprint</ListGroup.Item>
                        <ListGroup.Item style={{width: '17%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#f9f7f7'}}>Assignee</ListGroup.Item>
                    </ListGroup>
                    <div className="ListItems" id="style-2">
                        { taskList.taskList.map( (task) => {
                            return (
                                <ListGroup className="ListGroup" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', justifyContent: 'center', alignContent: 'center', height: '10vh', paddingTop: '3px'}}>
                                    <ListGroup.Item style={{width: '15%', backgroundColor: '#f9f7f7', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.number}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '28%', backgroundColor: '#f9f7f7', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.title}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '22%', backgroundColor: '#f9f7f7', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.dueDate}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', backgroundColor: '#f9f7f7', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.project}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '13%', backgroundColor: '#f9f7f7', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.sprint}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', backgroundColor: '#f9f7f7', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>
                                        {task.assignee ? task.assignee : 
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
                                                onClick={() => {}}>
                                              Pick
                                            </Button>
                                          </>
                                        }
                                    </ListGroup.Item>
                                </ListGroup>
                            )
                        })}
                    </div>
                </div>
                <div className="Resume">
                    <div className="Title">
                        Description
                    </div>
                    <div className="IssueDescription">
                        
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
                                <Button style={{width: '100%', height: '50%'}} variant="outline-secondary">
                                <div style={{marginTop: "-5px"}}>
                                    Continue
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