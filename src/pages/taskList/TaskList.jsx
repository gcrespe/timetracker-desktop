import './TaskList.css'
import { Table, Button, ListGroup } from 'react-bootstrap'

const TaskList = () => {

    const taskList = [
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

    return (
        <div className="Page">
            <div className="HomeSectionTaskList">
                <div className="List">
                    <ListGroup variant="flush" horizontal style={{width: '100%', backgroundColor: '#000000', fontSize: '12px', height: '6vh'}}>
                        <ListGroup.Item style={{width: '15%', borderWidth: '1px', borderColor: '#26303d', backgroundColor: '#181c22'}}>Number</ListGroup.Item>
                        <ListGroup.Item style={{width: '28%', borderWidth: '1px', borderColor: '#26303d', backgroundColor: '#181c22'}}>Title</ListGroup.Item>
                        <ListGroup.Item style={{width: '22%', borderWidth: '1px', borderColor: '#26303d', backgroundColor: '#181c22'}}>Due date</ListGroup.Item>
                        <ListGroup.Item style={{width: '17%', borderWidth: '1px', borderColor: '#26303d', backgroundColor: '#181c22'}}>Project</ListGroup.Item>
                        <ListGroup.Item style={{width: '13%', borderWidth: '1px', borderColor: '#26303d', backgroundColor: '#181c22'}}>Sprint</ListGroup.Item>
                        <ListGroup.Item style={{width: '17%', borderWidth: '1px', borderColor: '#26303d', backgroundColor: '#181c22'}}>Assignee</ListGroup.Item>
                    </ListGroup>
                    <div className="ListItems" id="style-2">
                        { taskList.map( (task) => {
                            return (
                                <ListGroup variant="flush" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '10vh', justifyContent: 'center', alignContent: 'center'}}>
                                    <ListGroup.Item style={{width: '15%', backgroundColor: '#181c22', marginTop: '3%'}}>{task.number}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '30%', backgroundColor: '#181c22', marginTop: '3%'}}>{task.title}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '20%', backgroundColor: '#181c22', marginTop: '3%'}}>{task.dueDate}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '15%', backgroundColor: '#181c22', marginTop: '3%'}}>{task.project}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '15%', backgroundColor: '#181c22', marginTop: '3%'}}>{task.sprint}</ListGroup.Item>
                                    <ListGroup.Item style={{width: '15%', backgroundColor: '#181c22', marginTop: '3%'}}>
                                        {task.assignee ? task.assignee : 
                                            <>
                                            <style type="text/css">
                                              {`
                                              .btn-outline-secondary {
                                                border-color: #26303d;
                                                color: #26303d;
                                              }
                                              .btn-outline-secondary:hover {
                                                background-color: #26303d;
                                                color: #ffffff;
                                                border-color: #26303d;
                                              }
                                              `}
                                            </style>
                                            <Button 
                                                variant="outline-secondary"
                                                style={{fontSize: '10px', height: '5vh', marginTop: '-10px', width: '80%'}}>
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
                        <ListGroup variant="flush" horizontal style={{width: '100%', fontSize: '9px'}}>
                            <ListGroup.Item style={{width: '10%', backgroundColor: '#181c22'}}>Task</ListGroup.Item>
                            <ListGroup.Item style={{width: '30%', backgroundColor: '#181c22'}}>Activity</ListGroup.Item>
                            <ListGroup.Item style={{width: '25%', backgroundColor: '#181c22'}}>Duration</ListGroup.Item>
                            <ListGroup.Item style={{width: '25%', backgroundColor: '#181c22'}}>Status</ListGroup.Item>
                        </ListGroup>
                        <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '88%'}} id="style-2">
                            { taskList.map( (task) => {
                                return (
                                    <ListGroup variant="flush" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '8vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '20%', backgroundColor: '#181c22', marginTop: '3%'}}>lalala</ListGroup.Item>
                                        <ListGroup.Item style={{width: '30%', backgroundColor: '#181c22', marginTop: '3%'}}>lalala</ListGroup.Item>
                                        <ListGroup.Item style={{width: '20%', backgroundColor: '#181c22', marginTop: '3%'}}>lalala</ListGroup.Item>
                                        <ListGroup.Item style={{width: '35%', backgroundColor: '#181c22', marginTop: '3%'}}>
                                            {task.assignee ? task.assignee : 
                                                <>
                                                <style type="text/css">
                                                {`
                                                .btn-outline-secondary {
                                                    border-color: #26303d;
                                                    color: #26303d;
                                                }
                                                .btn-outline-secondary:hover {
                                                    background-color: #26303d;
                                                    color: #ffffff;
                                                    border-color: #26303d;
                                                }
                                                `}
                                                </style>
                                                <Button 
                                                    variant="outline-secondary"
                                                    style={{fontSize: '10px', height: '5vh', marginTop: '-10px', width: '10vh'}}>
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
                    <div className="Title">
                        Your status
                    </div>
                    <div className="YourStatus">
                        <ListGroup variant="flush" horizontal style={{width: '100%', fontSize: '9px'}}>
                            <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22'}}>Project</ListGroup.Item>
                            <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22'}}>Issues</ListGroup.Item>
                            <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22'}}>Hours</ListGroup.Item>
                        </ListGroup>
                        <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '73%'}} id="style-2">
                            <ListGroup variant="flush" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '7vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                            </ ListGroup>
                            <ListGroup variant="flush" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '7vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                            </ ListGroup>
                            <ListGroup variant="flush" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', height: '7vh', justifyContent: 'center', alignContent: 'center'}}>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                                        <ListGroup.Item style={{width: '33%', backgroundColor: '#181c22', marginTop: '3%'}}>asdasd</ListGroup.Item>
                            </ ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskList;