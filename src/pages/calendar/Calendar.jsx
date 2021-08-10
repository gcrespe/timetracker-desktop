import { useState, useEffect } from 'react'
import './Calendar.css'
import Calendar from 'react-calendar'
import { Button, ListGroup, Card, ListGroupItem } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

const CalendarPage = inject('calendar')(observer((props) => {

  const { calendar } = props

  const formatDate = (date) => {
    return date.getDate().toString()+"-"+(date.getUTCMonth() +1 ).toString()+"-"+date.getFullYear()
  }

  const startDate = new Date()
  const startFormattedDate = formatDate(startDate)

  const [formattedDate, setFormattedDate] = useState(startFormattedDate)
  const [events,] = useState(calendar.events)
  const [dateList, setDateList] = useState([""])

  const formatValueDate = (value) => {
    
    const date = formatDate(value)
    setFormattedDate(date)

  }
  
  useEffect(() => {
    let lista = []
    calendar.events.map( event => lista.push(event.date))
    setDateList(lista)
  }, [])

  return (
    <div className="Page">
      <div className="HomeSectionCalendar">
        <Calendar
          className="react-calendar" 
          defaultActiveStartDate={new Date()}
          onChange={(value) => formatValueDate(value)}
          tileContent={({ date, view }) => (view === 'month' && dateList.indexOf(formatDate(date)) > -1) ? <p style={{position: 'absolute', color: '#1100cc', fontWeight: 'bold', zIndex: '5', marginLeft: '2.3%'}}>___</p> : null}
        />
      </div>
      <div className="ResumeCalendar">
        <div className="TitleCalendar">
            Day: {formattedDate}
        </div>
        <div className="IssueDescriptionCalendar">
          { events.map((event) => {
            {console.log(event)}
              if(event.date === formattedDate){
                return(
                    <Card style={{ width: '17rem' , border: 'none' }} className="text-left">
                      <Card.Body>
                          <Card.Title style={{fontSize: '25px'}}>{event.name}</Card.Title>
                      <Card.Text>
                          {event.description}
                      </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush" style={{marginLeft: '5%'}}>
                          <ListGroupItem>Responsável: {event.responsible} </ListGroupItem>
                          <ListGroupItem>Projeto: {event.project} </ListGroupItem>
                          <ListGroupItem>Cliente: {event.client}</ListGroupItem>
                          <ListGroupItem>Horário: {event.client}</ListGroupItem>
                      </ListGroup>
                      <Card.Body>
                          <Card.Title>Additional information</Card.Title>
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
    </div>
  );
}))

export default CalendarPage;
