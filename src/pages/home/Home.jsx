import { useState } from 'react'
import './Home.css'
import Card from 'react-bootstrap/Card'
import { Button, ListGroup, ListGroupItem, ButtonGroup, Spinner, Modal, InputGroup, FormControl, Form, Toast, Tabs, Tab } from 'react-bootstrap'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom'
import { inject, observer } from 'mobx-react'
import TimerDisplay from '../../components/TimerDisplay'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
 
const Home = inject('login', 'taskList', 'timerStore')(observer((props) => {
  
	const { login, taskList, timerStore } = props;
	const [isLoadingProjects, setLoadingProjects] = useState(false);
	const [showNewProject, setShowNewProject] = useState(false);
	const [isLoadingNewProject, setIsLoadingNewProject] = useState(false);
	const [isLoadingTasks, setIsLoadingTasks] = useState(false);
	const [nomeProjeto, setNomeProjeto] = useState("");
	const [entregaProjeto, setEntregaProjeto] = useState("");
	const [descricaoProjeto, setDescricaoProjeto] = useState("");
	const [categoriaProjeto, setCategoriaProjeto] = useState("");
	const [corProjeto, setCorProjeto] = useState("");

	const [projectMessage, setProjectMessage] = useState("");
	const [projectError, setProjectError] = useState("");

	const [key, setKey] = useState("project");

	const history = useHistory();

	const [notificationMessage, setNotificationMessage] = useState("")
    const [notification, setNotification] = useState(false)

	let firstButton;
	let secondButton;
	let thirdButton

	if (!timerStore.isRunning) {

		firstButton = (
		<>
			<style type="text/css">
				{`
				.btn-outline-secondary {
				border-color: #112d4e;
				color: #112d4e;
				width: 70px;
				}
				.btn-outline-secondary:hover {
				background-color: #112d4e;
				color: #ffffff;
				border-color: #112d4e;
				}
				`}
			</style>
			<Button variant="outline-secondary" style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}} onClick={() => lapTimer()}>Lap</Button>
		</>
		
		);

		secondButton = (
			<Button variant="outline-secondary" onClick={() => timerStore.startTimer()}>Start</Button>
		);

		thirdButton = (
			<Button variant="outline-secondary" onClick={() => finishTask()}>Finish</Button>
		);
	} else {

		firstButton = (
		<>
			<style type="text/css">
				{`
				.btn-outline-secondary {
				border-color: #112d4e;
				color: #112d4e;
				width: 70px;
				}
				.btn-outline-secondary:hover {
				background-color: #112d4e;
				color: #ffffff;
				border-color: #112d4e;
				}
				`}
			</style>
			<Button variant="outline-secondary" style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}} onClick={() => lapTimer()}>Lap</Button>      
		</>
		);

		secondButton = (
			<Button variant="outline-secondary" onClick={() => timerStore.stopTimer()}>Pause</Button>
		);

		thirdButton = (
			<Button variant="outline-secondary" onClick={() => finishTask()}>Finish</Button>
		);
		
	}

	async function finishTask(){

		if(timerStore.timer.milliseconds < 60000){

			setNotificationMessage("Não é possível finalizar uma tarefa em menos de um minuto");
			setNotification(true);

		}else {

			setIsLoadingTasks(true);
			
			try{

				await taskList.finishTask(
					login.userInfo.username,
					login.ongoingTask.id,
					timerStore.timer.totalMilliSeconds - timerStore.lapTime
				)

			}catch(e){

				console.log(e)

			}

			setNotificationMessage("Tarefa finalizada");
			setNotification(true);
			timerStore.resetTimer()
			login.ongoingTask = null

			setIsLoadingTasks(false)

		}
		
	}

	async function lapTimer(){

		if(timerStore.timer.totalMilliSeconds - timerStore.lapTime < 60000){
			setNotificationMessage("Não é possível finalizar uma atividade em menos de um minuto");
			setNotification(true);
		}else {

			setIsLoadingTasks(true);
			
			try{

				await taskList.lapTask(
					login.userInfo.username,
					login.ongoingTask.id,
					timerStore.timer.totalMilliSeconds - timerStore.lapTime
				)

			}catch(e){

				console.log(e)
				setIsLoadingTasks(false)

			}

			setIsLoadingTasks(false)
			timerStore.lapTimer()
		}
	}

	useEffect(() => {
		
		setIsLoadingTasks(true);
		setLoadingProjects(true)
		
		try{

			getProjects();
			getOngoingTask();

		}catch(e){

			console.log(e);
		}

		setTimeout(() => {
		
		setLoadingProjects(false);

		}, 1000);

		setTimeout(() => {
		
			setIsLoadingTasks(false);
	
		}, 1000);
		
	}, [])

	useEffect(() => {

		localStorage.setItem("mainDisplay", timerStore.mainDisplay);

	}, [timerStore.mainDisplay])

	async function handleAddProject(){

		
		setIsLoadingNewProject(true);

		await login.addProject(nomeProjeto, descricaoProjeto, entregaProjeto, categoriaProjeto, corProjeto)

		setTimeout(() => {
		
			setIsLoadingNewProject(false);
			setShowNewProject(false);
			setNotification(true);
			setNotificationMessage("Projeto adicionado com sucesso!");
	
		}, 1000);

		await login.getProjects();

		setIsLoadingTasks(false);
		setLoadingProjects(false);

	}

	async function getProjects(){

		await login.getProjects();
		
		for(var i = 0; i < login.projectsInfo.length; i++){

			console.log(login.projectsInfo[i].totalTasks)

			await login.getTasksStatus(login.userInfo.username, login.projectsInfo[i].name)

		}
	}

	async function getOngoingTask(){

		await login.getOngoingTask(login.userInfo.username);

	}

	return (
			<div className="HomeSection">
				<Modal show={showNewProject} onHide={() => setShowNewProject(false)} style={{ heigth: '60vh'}}>
					<Modal.Header closeButton>
						<Modal.Title>Adicionar um projeto</Modal.Title>
					</Modal.Header>
					<Tabs defaultActiveKey="project" activeKey={key} variant='pills' className="mb-3" style={{border: 'none', justifyContent: 'space-evenly', marginTop: '5%'}}>
						<Tab eventKey="project" title="Informações do projeto" disabled={key != "project"}>
							<Modal.Body style={{alignContent: 'center'}}>
								<div>
									Nome do projeto
								</div>
								<InputGroup className="mb-2">
									<FormControl aria-label="Nome" placeholder={"Nome"} onChange={(e) => setNomeProjeto(e.target.value)}/>
								</InputGroup>
								<div>
									Descrição
								</div>
								<Form>
									<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
										<Form.Control placeholder={"Breve descrição do projeto"} as="textarea" rows={4} onChange={(e) => setDescricaoProjeto(e.target.value)}/>
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="outline-secondary" style={{width: '25%'}} onClick={() => setKey("caracteristics")}>
									Próximo
								</Button>
							</Modal.Footer>
						</Tab>
						<Tab eventKey="caracteristics" title="Características" disabled={key != "caracteristics"}>
							<Modal.Body style={{alignContent: 'center'}}>
								<div>
									Categoria
								</div>
								<InputGroup className="mb-2">
									<FormControl aria-label="Nome" placeholder={"Categoria"} onChange={(e) => setCategoriaProjeto(e.target.value)}/>
								</InputGroup>
								<div>
									Data de entrega
								</div>
								<InputGroup className="mb-3">
									<FormControl aria-label="Entrega" placeholder={"Entrega"} onChange={(e) => setEntregaProjeto(e.target.value)}/>
								</InputGroup>
								<div>
									Cor do projeto
								</div>
								<InputGroup className="mb-3">
									<FormControl aria-label="Entrega" placeholder={"Cor"} onChange={(e) => setCorProjeto(e.target.value)}/>
								</InputGroup>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="outline-secondary" style={{width: '25%'}} onClick={() => setKey("project")}>
									Voltar
								</Button>
								<Button variant="outline-secondary" style={{width: '25%'}} onClick={() => handleAddProject()}>
									{isLoadingNewProject ? 
										<Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/> : 'Adicionar'} 
								</Button>
							</Modal.Footer>
						</Tab>
					</Tabs>
				</Modal>
				<div className="Section">
					<div style={{width: '70%', height: '100%', borderRadius: '20px'}}>
						<div style={{textAlign: 'left', fontSize: 40, fontWeight: 'lighter'}}>
							Bem-vindo, {login.userInfo.username}.
						</div>
					
					{
						!isLoadingTasks ?

							timerStore.laps != 0 ?
	
								<>
									<div style={{textAlign: 'left', fontSize: 18, fontWeight: 'lighter'}}>
										Acompanhe o desenvolvimento de suas atividades na lista abaixo
									</div>
									<div style={{height: '70%', overflow: 'scroll', width: '100%', marginTop: '3%'}}>
										{timerStore.lapData.map((el) =>
											<TimerDisplay
												key={el.lap.id}
												leftText={el.text}
												rightText={el.lap.display}
											/>
										)}
									</div>
								</>
	
								:
	
								<div style={{height: '80%', width: '100%', marginTop: '3%', textAlign: 'center', justifyContent: 'center', fontSize: '18px'}}>
									<div style={{marginTop: '10%', width: '50%', marginLeft: '25%'}}>
										Durante o desenvolvimento, as etapas das tarefas aparecerão aqui, assim como o tempo que levaram
									</div>
								</div>
						:

						<Spinner animation="border" size="sm" style={{marginTop: '10%'}}/> 
					}
					
						
					</div>
					<div style={{width: '38%', height: '100%', borderRadius: '20px', marginRight: '-3%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>

						{
							!isLoadingTasks ?

							login.ongoingTask != null ?
							
							<>
								<div style={{fontSize: 18}}>
									{login.ongoingTask != null ? login.ongoingTask.title : ""}
								</div>

								<div style={{fontSize: 34, letterSpacing: 2}}>
									{timerStore.mainDisplay}
								</div>

								<div>
									<div>
										<div>
										<ButtonGroup size="md">
											{firstButton}
											{secondButton}
											{thirdButton}
										</ButtonGroup>
										</div>
									</div>
								</div>
							</>

							:

							<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
								<div style={{fontSize: '30px', marginRight: '12%'}}>
									Você ainda não selecionou uma tarefa
									
								</div>
								<div style={{fontSize: '14px', marginRight: '12%', marginTop: '10px'}}>
									É possível ir até o as suas tarefas por meio do menu ao lado esquerdo
								</div>
							</div>
							:

							<Spinner animation="border" size="sm" style={{marginTop: '10%'}}/> 

						}
						
					</div>
				</div>
				<div className="DownSection">
					<div className="Daily">
						{isLoadingProjects ?
							<Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/>
							:
								login.projectsInfo != null && login.projectsInfo.length > 0 && login.projectsInfo.length < 3 ? 
									<>	
										{		
											login.projectsInfo.map( project => {
												return (
												<div style={{marginLeft: '1%', marginRight: '1%'}}>
													<Card style={{ width: '22rem', height: '19rem', border: 'none'}} className="text-left">
														<Card.Body>
															<Card.Title style={{backgroundColor: '#dbe2ef',  borderTopLeftRadius: '5px', borderTopRightRadius: '5px', height: '7vh', color: '#112d4e', padding: '13px', display: 'flex', flexDirection: 'row', fontSize: '18px'}}>
																{project.name}
																<div style={{fontSize: '14px', padding: '3px', width: '72%', textAlign: 'right', fontWeight: 'normal'}}>
																	{project.dueDate != null ? project.dueDate.replaceAll("-", "/") : null}
																</div>
															</Card.Title>
															<Card.Text style={{marginLeft: '15px', backgroundColor: '#ffffff'}}>
																{project.description}
															</Card.Text>
														</Card.Body>
														<ListGroup className="list-group-flush">
															<ListGroupItem style={{border: 'none', marginLeft: '15px'}}>Total de tarefas: {project.totalTasks}</ListGroupItem>
															<ListGroupItem style={{border: 'none', marginLeft: '15px'}}>Total de tarefas restantes: {project.remainingTasks}</ListGroupItem>
															<ListGroupItem style={{border: 'none', marginLeft: '15px'}}>Total de tarefas realizadas: {project.doneTasks}</ListGroupItem>
														</ListGroup>
														{/* <Card.Body>
															<ButtonCustom text={"Details"}/>
														</Card.Body> */}
													</Card>
												</div>
												)
											})}
											{
											<div style={{marginLeft: '1%', marginRight: '1%'}}>
												<Card style={{ width: '20rem' , border: 'none' }} className="text-center">
													<Card.Body>
														<Card.Title>Você ainda pode adicionar {3-login.projectsInfo.length} projetos</Card.Title>
														<Card.Text>
															
														</Card.Text>
													</Card.Body>
													<ListGroup className="list-group-flush">
														<ListGroupItem style={{border: 'none', justifyContent: 'center', display: 'flex'}}><div style={{width: '70%'}}>Novos projetos podem ser criados clicando no botão abaixo</div></ListGroupItem>
														<ListGroupItem style={{border: 'none'}}></ListGroupItem>
													</ListGroup>
													<Card.Body>
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
														<Button style={{width: '50%', height: '5%'}} variant="outline-secondary" onClick={() => setShowNewProject(true)}>
															<div style={{marginTop: "-5px"}}>
																Adicionar
															</div>
														</Button>
													</>
													</Card.Body>
												</Card>
											</div>	
										}
									</>
							: login.projectsInfo != null && login.projectsInfo.length == 3 ?
								login.projectsInfo.map( project => {
									return (
										<div style={{marginLeft: '1%', marginRight: '1%'}}>
											<Card style={{ width: '22rem', height: '19rem', border: 'none'}} className="text-left">
												<Card.Body>
													<Card.Title style={{backgroundColor: '#dbe2ef',  borderTopLeftRadius: '5px', borderTopRightRadius: '5px', height: '7vh', color: '#112d4e', padding: '13px', display: 'flex', flexDirection: 'row', fontSize: '18px'}}>
														{project.name}
														<div style={{fontSize: '14px', padding: '3px', width: '72%', textAlign: 'right', fontWeight: 'normal'}}>
															{project.dueDate != null ? project.dueDate.replaceAll("-", "/") : null}
														</div>
													</Card.Title>
													<Card.Text style={{marginLeft: '15px', backgroundColor: '#ffffff'}}>
														{project.description}
													</Card.Text>
												</Card.Body>
												<ListGroup className="list-group-flush">
													<ListGroupItem style={{border: 'none', marginLeft: '15px'}}>Total de tarefas: {project.totalTasks}</ListGroupItem>
													<ListGroupItem style={{border: 'none', marginLeft: '15px'}}>Total de tarefas restantes: {project.remainingTasks}</ListGroupItem>
													<ListGroupItem style={{border: 'none', marginLeft: '15px'}}>Total de tarefas realizadas: {project.doneTasks}</ListGroupItem>
												</ListGroup>
												{/* <Card.Body>
													<ButtonCustom text={"Details"}/>
												</Card.Body> */}
											</Card>
										</div>
									)
								})
							: (
								<div style={{marginLeft: '1%', marginRight: '1%'}}>
									<Card style={{ width: '20rem' , border: 'none' }} className="text-center">
										<Card.Body>
											<Card.Title>Parece que você ainda não tem nenhum projeto</Card.Title>
											<Card.Text>
												
											</Card.Text>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroupItem style={{border: 'none'}}>Você pode criar novos projetos clicando no botão abaixo</ListGroupItem>
											<ListGroupItem style={{border: 'none'}}></ListGroupItem>
										</ListGroup>
										<Card.Body>
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
												<Button style={{width: '50%', height: '5%'}} variant="outline-secondary" onClick={() => setShowNewProject(true)}>
													<div style={{marginTop: "-5px"}}>
														Adicionar
													</div>
												</Button>
											</>
										</Card.Body>
									</Card>
								</div>
							)
						}
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

export default Home;
