import { useState, useEffect } from 'react' 
import './TaskList.css'
import empty from '../../assets/empty.svg'
import { useHistory } from 'react-router-dom'
import { Button, ListGroup, Card, ListGroupItem, Toast, Spinner, Modal, InputGroup, FormControl, Form, Dropdown} from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

const TaskList = inject('taskList', 'login')(observer((props) => {

    const { taskList, login } = props;

    const history = useHistory();

    const [selectedIssueDetails, setSelectedIssueDetails] = useState(0)
    const [taskListState, setTaskListState] = useState(null)
    const [loading, setLoading] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState("")
    const [notification, setNotification] = useState(false)
    const [showNewTask, setShowNewTask] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [project, setProject] = useState("")
    const [description, setDescription] = useState("")
    const [prioridade, setPrioridade] = useState("")
    const [taskTime, setTaskTime] = useState("")

    const priority = [
        "Baixa",
        "Média",
        "Alta",
        "Nenhuma"
    ]

    useEffect(() => {
        
        getTaskTime()

    }, [selectedIssueDetails])

    async function getTaskTime(){
        
        if(!taskList.taskList) return
        // const taskTime = taskList.getTaskTime(taskList.taskList[selectedIssueDetails].id)

        // console.log(taskTime.data.totalTime)
        // const hms = secondsToHms(taskTime)

        // setTaskTime(hms)

    }

    function secondsToHms(d) {
        d = Number(d);
    
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    }

    async function doAssignIssue () {
        setLoading(true)
        try{

            const response = await taskList.assign(
                taskListState[selectedIssueDetails].id,
                login.userInfo.username
            )
            console.log(response)
            
            if(taskList.assigned == false){

                setTimeout(() => {   
                    
                    getTaskList();

                    setNotificationMessage("Você já está fazendo uma tarefa")
                    setNotification(true);
        
                    setLoading(false)
    
                }, 2000);

            }else {
                setTimeout(() => {                

                    getTaskList();

                    setNotificationMessage("Pronto. Agora pode acompanhar sua tarefa na tela inicial")
                    setNotification(true);
        
                    setLoading(false)
        
        
                }, 2000);
            }
        }catch(e){
            throw e;
        }
    }

    async function doUnassignIssue () {

        setLoading(true)

        try{

            const response = await taskList.cancelAssign(
                taskList.taskList[selectedIssueDetails].id,
                login.userInfo.username
            )
            
            console.log(response)
            
            if(taskList.assignmentCanc == false){

                setTimeout(() => {   
                    
                    getTaskList();

                    setNotificationMessage("Houve um erro durante o cancelamento da tarefa.")
                    setNotification(true);
        
                    setLoading(false)
    
                }, 2000);

            }else {
                setTimeout(() => {                

                    getTaskList();

                    setNotificationMessage("Pronto. Agora pode selecionar outra tarefa.")
                    setNotification(true);
        
                    setLoading(false)
        
        
                }, 2000);
            }
        }catch(e){
            throw e;
        }
    }

    useEffect(() => {
        setLoading(true);
        getTaskList();
        setTaskListState(taskList.taskList)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    async function getTaskList(){
        await taskList.getTasks(login.userInfo.username)
        setTaskListState(taskList.taskList)
    }

    async function addNewTask(){

        setShowNewTask(false)
        setLoading(true)
        
        await taskList.newTask(
            login.userInfo.username,
            project,
            taskTitle,
            dueDate,
            description,
            prioridade
        );

        taskList.getTasks(login.userInfo.username)
        
        setTimeout(() => {
            
            history.push('/taskList')
            setLoading(false)
    
        }, 2000);

        setSelectedIssueDetails(taskList.taskList.length)

    }


    return (
        <div className="Page">
            {loading ? 
                
                <div style={{width: '100%', height: '100%', justifyContent: 'center', marginTop: '25%'}}>
                    <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/>
                </div>
            
                :

                <>

                    <Modal show={showNewTask} onHide={() => setShowNewTask(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Nova tarefa</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}> 
                                <div style={{width: '45%'}}> 
                                    <div>
                                        Título da tarefa
                                    </div>
                                    <InputGroup className="mb-2">
                                        <FormControl aria-label="Nome" placeholder={"Nome"} onChange={(e) => setTaskTitle(e.target.value)}/>
                                    </InputGroup>
                                    <div>
                                        Data de entrega
                                    </div>
                                    <InputGroup className="mb-3">
                                        <FormControl aria-label="Entrega" placeholder={"Entrega"} onChange={(e) => setDueDate(e.target.value)}/>
                                    </InputGroup>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '10%'}}>
                                        <Dropdown>
                                            <Dropdown.Toggle show={false}>
                                                Projeto
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu show={false}>
                                                {login.projectsInfo.map( (project, index) => {
                                                    return (
                                                        <Dropdown.Item eventKey={index} onSelect={() => setProject(project.name)}>{project.name}</Dropdown.Item>
                                                    )
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <div style={{width: '30%', justifyContent: 'center', marginLeft: '10%', marginTop: '1%'}}>
                                            {project}
                                        </div>     
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '10%'}}>
                                        <Dropdown>
                                            <Dropdown.Toggle show={false}>
                                                Prioridade
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu show={false}>
                                                {priority.map( (prio, index) => {
                                                    return (
                                                        <Dropdown.Item eventKey={index} onSelect={() => setPrioridade(prio)}>{prio}</Dropdown.Item>
                                                    )
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <div style={{width: '30%', justifyContent: 'center', marginLeft: '10%', marginTop: '1%'}}>
                                            {prioridade}
                                        </div>     
                                    </div>
                                </div>
                                <div style={{width: '45%'}}> 
                                    <div>
                                        Descrição
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control placeholder={"Descrição da tarefa"} as="textarea" rows={7} onChange={(e) => setDescription(e.target.value)}/>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" style={{width: '25%'}} onClick={() => addNewTask()}>
                                {
                                    loading ?
                                    <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> :
                                    "Adicionar"
                                }
                                    
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="HomeSectionTaskList">
                        <div className="List">
                            {
                                taskList.taskList.length > 0 ?

                                <>
                                    <ListGroup horizontal style={{width: '100%', backgroundColor: '#ffffff', fontSize: '12px', height: '6vh'}}>
                                    <ListGroup.Item style={{width: '28%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Tarefa</ListGroup.Item>
                                    <ListGroup.Item style={{width: '22%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Data de entrega</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', borderWidth: '1px', borderColor: '#dbe2ef', backgroundColor: '#ffffff'}}>Projeto</ListGroup.Item>
                                    <ListGroup.Item style={{width: '17%', borderWidth: '1px', border: 'none', backgroundColor: '#ffffff'}}></ListGroup.Item>
                                    </ListGroup>
                                    <div className="ListItems" id="style-2">

                                            { taskList.taskList.map( (task, index) => {
                                                return (
                                                    <ListGroup className="ListGroup" horizontal style={{width: '100%', color: '#cccccc', fontSize: '12px', justifyContent: 'left', alignContent: 'left', height: '10vh', paddingTop: '3px'}}>
                                                        <ListGroup.Item style={{width: '29%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.title}</ListGroup.Item>
                                                        <ListGroup.Item style={{width: '22%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.dueDate.slice(0, 10)}</ListGroup.Item>
                                                        <ListGroup.Item style={{width: '17%', paddingTop: '20px', border: 'none', color: '#aaaaaa'}}>{task.project}</ListGroup.Item>
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
                                                                        Detalhes
                                                                </Button>
                                                            </>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item style={{
                                                            width: '12%', 
                                                            border: 'none', fontSize: '10px', 
                                                            height: '60%', marginTop: task.status == 'NOT ASSIGNED' ? null : '8px', 
                                                            color: task.status == 'DONE' ? '#c1e8be' : task.status == 'ONGOING' ? '#abd2ff' : '#facdcd', fontWeight: 'bold'}}>{task.status}</ListGroup.Item>
                                                    </ListGroup>
                                                )
                                                })
                                            }
                                        </div>
                                </>

                                :

                                <div style={{marginTop: '5%', width: '80%', justifyContent: 'center', marginLeft: '30%', fontSize: '22px'}}>

                                    Ao adicionar novas tarefas, elas aparecerão aqui para serem selecionadas e acompanhadas

                                    <div style={{marginTop: '25%', marginLeft: '7%', opacity: '80%'}}>
                                        <img src={empty} className="App-logo" alt="empty" />
                                    </div>

                                </div>

                            }
                        </div>
                        <div className="Resume">
                            {
                                taskList.taskList.length > 0 

                                ?

                                <>
                                    <div className="Title">
                                        Detalhes
                                    </div>
                                    <div className="IssueDescription">
                                        { taskList.taskList.map( (task, index) => {
                                            if (index === selectedIssueDetails)
                                                return (
                                                    <div style={{overflowY: 'scroll', height: '28.5rem', marginTop: '2%'}}>
                                                        <Card style={{ width: '17rem' , border: 'none' }} className="text-left">
                                                            <Card.Body>
                                                                <Card.Title>{task.title}</Card.Title>
                                                                <Card.Title style={{fontSize: '10px'}}>{task.id}</Card.Title>
                                                            </Card.Body>
                                                            <ListGroup className="list-group-flush" style={{marginLeft: '5%'}}>
                                                                <ListGroupItem>{task.project} </ListGroupItem>
                                                                <ListGroupItem>Prioridade {task.priority}</ListGroupItem>
                                                                <ListGroupItem>Entrega: {task.dueDate.slice(0,10)} </ListGroupItem>
                                                            </ListGroup>
                                                            <Card.Body>
                                                                <Card.Title>Informações Adicionais</Card.Title>
                                                                <Card.Text>
                                                                    {task.description}
                                                                </Card.Text>
                                                                
                                                            </Card.Body>
                                                            {/* {taskTime} */}
                                                            { task.status == 'ONGOING' 
                                                            
                                                            ?
                                                            
                                                            <div>
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
                                                                        style={{fontSize: '10px', height: '5vh', marginTop: '20px', marginLeft: '22%', width: '60%', marginBottom: '20px'}}
                                                                        onClick={() => doUnassignIssue()}>
                                                                            Cancelar
                                                                    </Button>
                                                                </>
                                                            </div>
                                                            : null}
                                                        </Card>
                                                    </div>
                                                )
                                            })
                                        }                                            
                                    </div>
                                </>

                                :

                                <div>
                                </div>
                            }
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
                                        <Button style={{width: '100%', height: '60%', marginLeft: taskList.taskList.length > 0  ? '0%' : '60%', marginTop: taskList.taskList.length > 0  ? '0%' : '10%'}} 
                                                variant="outline-secondary" 
                                                disabled={login.projectsInfo.length == 0}
                                                onClick={() => setShowNewTask(true)}>
                                                    <div>
                                                        Adicionar
                                                    </div>
                                        </Button>
                                    </>
                                </div>
                                {
                                    taskList.taskList.length > 0  ?
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
                                            <Button style={{width: '100%', height: '60%'}} 
                                                    variant="outline-secondary" 
                                                    disabled={taskList.taskList[selectedIssueDetails].status != "NOT ASSIGNED"}
                                                    onClick={() => doAssignIssue()}>
                                                        <div>
                                                        {loading ? 
                                                            <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Selecionar'}    
                                                        </div>
                                            </Button>
                                        </>
                                    </div>
                                    : null
                                }
                                
                            </div>
                        </div>
                    </div>

                </>
            }
            
        </div>
    );
}))

export default TaskList;