import { observable, makeObservable, action } from "mobx"

export default class CalendarStore {

    events = [
        {
            name: 'Event 1',
            description: 'Description 1',
            responsible: 'Responsible 1',
            client: 'Client 1',
            project: 'Project 1',
            date: '3-8-2021'
        },
        {
            name: 'Event 5',
            description: 'Description 5',
            responsible: 'Responsible 5',
            client: 'Client 5',
            project: 'Project 5',
            date: '3-8-2021'
        },
        {
            name: 'Event 2',
            description: 'Description 2',
            responsible: 'Responsible 2',
            client: 'Client 2',
            project: 'Project 2',
            date: '4-8-2021'
        },
        {
            name: 'Event 3',
            description: 'Description 3',
            responsible: 'Responsible 3',
            client: 'Client 3',
            project: 'Project 3',
            date: '5-8-2021'
        },
        {
            name: 'Event 4',
            description: 'Description 4',
            responsible: 'Responsible 4',
            client: 'Client 4',
            project: 'Project 4',
            date: '6-8-2021'
        },
        {
            name: 'Event 6',
            description: 'Description 6',
            responsible: 'Responsible 6',
            client: 'Client 6',
            project: 'Project 6',
            date: '20-8-2021'
        }
    ]

    dayEvents = ""

    setDayEvents (events) {
        this.dayEvents = events
    } 

    constructor () {
        makeObservable(this, {
          events: observable,
          dayEvents: observable,
          setDayEvents: action
      })
    }

}