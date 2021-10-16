import { makeObservable, observable, action } from "mobx";
import api from '../api/api.js'

export default class TaskListStore {

    taskList = []

    activities = []

    selectedTask = null

    assigned = false;
    assignmentCanc = false;

    async getTasks(username){
        try {

            await api.post('/tasks/tasks', {
                username
            }).then((response) => {
                this.setTaskList(response.data.tasks)
                console.log(response.data.tasks)
            })

        }catch(e){
            console.log(e);
        }
    }

    async newTask(username, project, title, dueDate, description, priority){
        try {

            await api.post('/tasks/newTask', {
                username,
                project,
                title,
                dueDate,
                description,
                priority, 
                status: "NOT ASSIGNED"
            }).then((response) => {
                console.log(response.data.tasks)
            })

        }catch(e){
            console.log(e);
        }
    }

    async assign(taskId, username){
        try {

            await api.post('/tasks/assign', {
                username,
                id: taskId
            }).then((response) => {
                console.log(response.status);
                if(response.status == 200) this.assigned = true;
                else this.assigned = false;
                return response.data.message;
                
            })

        }catch(e){
            console.log(e);
            return e.status
        }
    }

    async cancelAssign(taskId, username){
        try {

            await api.post('/tasks/cancel-assignment', {
                username,
                id: taskId
            }).then((response) => {
                console.log(response.status);
                if(response.status == 200) this.assignmentCanc = true;
                else this.assignmentCanc = false;
                return response.data.message;
                
            })

        }catch(e){
            console.log(e);
            return e.status
        }
    }
    
    async finishTask(username, id, miliseconds){

        try {

            await api.post(`/tasks/finish-task`, {
                username,
                id,
                seconds: miliseconds/1000,
            })
            .then((response) => {
                console.log(response)
            })

        }catch(e){
            console.log(e);
        }

    }

    async lapTask(username, id, miliseconds){

        try {

            await api.post(`/tasks/lap-task`, {
                username,
                id,
                seconds: miliseconds/1000,
            })
            .then((response) => {
                console.log(response)
            })

        }catch(e){
            console.log(e);
        }

    }

    async getTaskTime(taskId){

        try {

            await api.post(`/tasks/total-task-time`, {
                taskId
            })
            .then((response) => {
                console.log(response)
                return response
            })

        }catch(e){
            console.log(e);
        }

    }

    setTaskList(taskList){
        this.taskList = taskList
    }

    setTimerValue(value){
        this.timerValue = value
    }

    setSelectedTask(task){
        this.selectedTask = task
    }

    constructor () {
        makeObservable(this, {
            taskList: observable,
            activities: observable,
            selectedTask: observable,
            setTaskList: action,
            setTimerValue: action,
            setSelectedTask: action,
            getTasks: action,
            newTask: action
      })
    }

}