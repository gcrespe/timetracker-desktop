import { observable, makeObservable, action } from "mobx"
import api from '../api/api.js'

export default class CalendarStore {

    events = []

    projectEvents = []

    dayEvents = ""


    /** {
            name: 'Event 2',
            description: 'Description 2',
            responsible: 'Responsible 2',
            client: 'Client 2',
            project: 'Project 2',
            date: '4-8-2021'
        } */
    setDayEvents (events) {
        this.dayEvents = events
    } 

    async getProjectsDates(username){

        try {

            await api.get(`/projects/projects-dates?username=${username}`)
            .then((response) => {
                this.projectEvents = response.data.result
                console.log(response)
            })

        }catch(e){
            console.log(e);
        }

    }

    async getTasksEvents(username){

        try {

            await api.get(`/tasks/tasks-dates?username=${username}`)
            .then((response) => {
                this.events = response.data.result
                console.log(response)
            })

        }catch(e){
            console.log(e);
        }

    }

    constructor () {
        makeObservable(this, {
          events: observable,
          dayEvents: observable,
          setDayEvents: action
      })
    }

}