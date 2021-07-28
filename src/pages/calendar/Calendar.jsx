import { useState } from 'react'
import './Calendar.css'
import Calendar from 'react-calendar'
import { Button, ListGroup } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

const CalendarPage = () => {

  const [value, setValue] = useState(new Date());

  return (
    <div className="Page">
      <div className="HomeSectionCalendar">
        <Calendar
          className="react-calendar" 
          onClickDay={(value, event) => alert('Clicked day: ', value)}
        />
      </div>
      <div className="ResumeCalendar">
        <div className="TitleCalendar">
            Day description - {value.getTime}
        </div>
        <div className="IssueDescriptionCalendar">
          {value.getDate}
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
