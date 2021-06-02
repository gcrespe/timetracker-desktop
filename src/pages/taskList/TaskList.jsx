import {useState} from 'react'
import './TaskList.css'
import { Button, ListGroup } from 'react-bootstrap'

const TaskList = () => {

    const [, updateState] = useState();

    const taskList = [
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: 'Giuliano',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        },
        {
            number: 1,
            title: 'TT64 - Criar tela de perfil',
            description: 'Tela que deve exibir as informações pessoais',
            dueDate: '05/06/05',
            remainingTime: '7 days',
            creator: 'Jeff Kanashiro',
            assignee: '',
            priority: 'High',
            project: 'Project X',
            sprint: 'Sprint 1'

        }
    ]

    const activities = [
        {
            task: 1,
            activity: 'Page',
            duration: '00:35:12',
            status: 'ongoing'
        },
        {
            task: 2,
            activity: 'Page',
            duration: '00:35:12',
            status: 'ongoing'
        }
    ]

    const [activity, setActivity] = useState(activities);

    const pickTask = (task) => {

        const activity = {
            task: task.number,
            activity: 'Description',
            duration: '00:00:00',
            status: 'ongoing'
        }

        const auxActivities = activities;

        auxActivities.push(activity)
        setActivity(auxActivities)
        updateState({})
        setActivity(auxActivities)
        updateState({})
    }

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
                        { taskList.map( (task) => {
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
                                                onClick={() => pickTask(task)}>
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
                        Your activities
                    </div>
                    <div className="YourIssues">
                        <ListGroup horizontal style={{width: '100%', fontSize: '9px'}}>
                            <ListGroup.Item style={{width: '25%', backgroundColor: '#f9f7f7', border: 'none'}}>Task</ListGroup.Item>
                            <ListGroup.Item style={{width: '25%', backgroundColor: '#f9f7f7', border: 'none'}}>Activity</ListGroup.Item>
                            <ListGroup.Item style={{width: '25%', backgroundColor: '#f9f7f7', border: 'none'}}>Duration</ListGroup.Item>
                            <ListGroup.Item style={{width: '25%', backgroundColor: '#f9f7f7', border: 'none'}}>Status</ListGroup.Item>
                        </ListGroup>
                        <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '88%'}} id="style-2">
                            { activity.map( (activity) => {
                                return (
                                    <ListGroup horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '8vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '20%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>{activity.task}</ListGroup.Item>
                                        <ListGroup.Item style={{width: '25%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>{activity.activity}</ListGroup.Item>
                                        <ListGroup.Item style={{width: '25%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>{activity.duration}</ListGroup.Item>
                                        <ListGroup.Item style={{width: '25%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>
                                            {activity.status == 'ongoing' ? 
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
                                                        type="warning"  
                                                        style={{fontSize: '10px', height: '5vh', marginTop: '-10px', width: '8vh'}}>
                                                    Pause
                                                    </Button>
                                                </>
                                            : activity.status = 'paused' ? 
                                                <>
                                                    <style type="text/css">
                                                    {`
                                                    .btn-outline-primary {
                                                        border-color: #dbe2ef;
                                                        color: #dbe2ef;
                                                    }
                                                    .btn-outline-primary:hover {
                                                        background-color: #dbe2ef;
                                                        color: #ffffff;
                                                        border-color: #dbe2ef;
                                                    }
                                                    `}
                                                    </style>
                                                    <Button 
                                                        variant="outline-primary"
                                                        type="warning"
                                                        style={{fontSize: '10px', height: '5vh', marginTop: '-10px', width: '10vh'}}>
                                                    Continue
                                                    </Button>
                                                </>
                                            : null }
                                        </ListGroup.Item>
                                    </ListGroup>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Title">
                        Your status
                    </div>
                    <div className="YourStatus">
                        <ListGroup horizontal style={{width: '100%', fontSize: '9px'}}>
                            <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', border: 'none'}}>Project</ListGroup.Item>
                            <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', border: 'none'}}>Issues</ListGroup.Item>
                            <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', border: 'none'}}>Hours</ListGroup.Item>
                        </ListGroup>
                        <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '73%'}} id="style-2">
                            <ListGroup horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '7vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                            </ ListGroup>
                            <ListGroup horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '7vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                            </ ListGroup>
                            <ListGroup horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '7vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#f9f7f7', marginTop: '3%', border: 'none', color: '#aaaaaa'}}>asdasd</ListGroup.Item>
                            </ ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskList;