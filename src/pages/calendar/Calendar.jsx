import { useState } from 'react'
import './Calendar.css'
import Calendar from 'react-calendar'
import { Button, ListGroup, Card, ListGroupItem } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

const CalendarPage = inject('calendar')(observer((props) => {

  const { calendar } = props

  const startDate = new Date()
  const startFormattedDate = startDate.getDate().toString()+"-"+(startDate.getUTCMonth() + 1).toString()+"-"+startDate.getFullYear()

  const [formattedDate, setFormattedDate] = useState(startFormattedDate)
  const [events,] = useState(calendar.events)

  const formatValueDate = (value) => {
    
    const date = value.getDate().toString()+"-"+(value.getUTCMonth() + 1).toString()+"-"+value.getFullYear()
    
    setFormattedDate(date)

  }

  return (
    <div className="Page">
      <div className="HomeSectionCalendar">
        <Calendar
          className="react-calendar" 
          defaultActiveStartDate={new Date()}
          onChange={(value) => formatValueDate(value)}
        />
      </div>
      <div className="ResumeCalendar">
        <div className="TitleCalendar">
            Day: {formattedDate}
        </div>
        <div className="IssueDescriptionCalendar">
          { events.map((event) => {
            {console.log(event)}
              if(event.date == formattedDate){
                return(
                  <div style={{height: '22.5rem'}}>
                    <Card style={{ width: '17rem' , border: 'none' }} className="text-left">
                      <Card.Body>
                          <Card.Title>{event.name}</Card.Title>
                      <Card.Text>
                          {event.description}
                      </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush" style={{marginLeft: '5%'}}>
                          <ListGroupItem>Responsável: {event.responsible} </ListGroupItem>
                          <ListGroupItem>{event.project} </ListGroupItem>
                          <ListGroupItem>{event.client}</ListGroupItem>
                      </ListGroup>
                      <Card.Body>
                          <Card.Title>Additional information</Card.Title>
                          <Card.Text>
                              {event.description}
                          </Card.Text>
                      </Card.Body>
                      </Card>
                  </div>
                )
              }    
          })}
        </div>
      </div>
    </div>
  );
}))

export default CalendarPage;
