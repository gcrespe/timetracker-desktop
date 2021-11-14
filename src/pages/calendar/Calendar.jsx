import { useState, useEffect } from 'react'
import './Calendar.css'
import Calendar from 'react-calendar'
import calendarIcon from '../../assets/calendar.svg'
import { Button, ListGroup, Card, ListGroupItem, Spinner } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

const CalendarPage = inject('calendar', 'taskList', 'login')(observer((props) => {

	const { calendar, taskList, login } = props

	const formatDate = (date) => {
		return date.getDate().toString()+"-"+(date.getUTCMonth() +1 ).toString()+"-"+date.getFullYear()
	}

	const startDate = new Date()
	const startFormattedDate = formatDate(startDate)

	const [formattedDate, setFormattedDate] = useState(startFormattedDate)
	const [dateList, setDateList] = useState([""])
	const [loading, setLoading] = useState(false);

	const formatValueDate = (value) => {
		
		const date = formatDate(value)
		setFormattedDate(date)

	}

	let lista = []
	
	useEffect(() => {

		setLoading(true)
		getTaskList()
		

	}, [])

	async function getTaskList(){
		
		await taskList.getTasks(login.userInfo.username)
		
		taskList.taskList.map(task => lista.push(task.dueDate))
		setDateList(lista)
		setLoading(false)
	}

	return (
		<div className="Page">
			{
				loading ?

				<div style={{width: '100%', height: '100%', justifyContent: 'center', marginTop: '25%'}}>
                    <Spinner animation="border" size="sm" style={{marginBottom: '2px'}}/>
                </div>

				:
				<>
					<div className="HomeSectionCalendar">
					<Calendar
						className="react-calendar" 
						defaultActiveStartDate={new Date()}
						onChange={(value) => formatValueDate(value)}
						tileContent={({ date, view }) => (view === 'month' && dateList.indexOf(formatDate(date)) > -1) ? <p style={{position: 'absolute', color: '#1100cc', fontWeight: 'bold', zIndex: '5', marginLeft: '2.3%'}}>___</p> : null}
					/>
					</div>
					{
						dateList == "" 
						
						? 
						
							<div className="ResumeCalendar">
								<img src={calendarIcon} className="App-logo" alt="calendar" />
								<div style={{width: '70%'}}>
									Aqui você pode ver, de forma resumida, as datas de entrega de seus projetos e tarefas.
								</div>
								<div style={{width: '70%'}}>
									Dias sublinhados são os que possuem entregas
								</div>
							</div> 
						
						: 

						<div className="ResumeCalendar">
							<div className="TitleCalendar">
									{formattedDate}
							</div>
							<div className="IssueDescriptionCalendar">
								{ taskList.taskList.map((event) => {
									if(event.dueDate == formattedDate){
										return(
											<Card style={{ width: '17rem' , border: 'none' }} className="text-left">
												<Card.Body>
													<Card.Title style={{fontSize: '25px', color: "#112d4e"}}>{event.title}</Card.Title>
													<Card.Title style={{fontSize: '10px'}}>{event.id}</Card.Title>
												</Card.Body>
												<ListGroup className="list-group-flush" style={{marginLeft: '5%'}}>
														<ListGroupItem>Status: {event.status} </ListGroupItem>
														<ListGroupItem>Projeto: {event.project} </ListGroupItem>
														<ListGroupItem>Prioridade: {event.priority}</ListGroupItem>
												</ListGroup>
												<Card.Body>
														<Card.Title>Informações adicionais</Card.Title>
														<Card.Text>
																{event.description}
														</Card.Text>
												</Card.Body>
											</Card>
										)
									}    
								})}
							</div>
						</div>
					}
				</>

			}

		</div>
	);
}))

export default CalendarPage;
