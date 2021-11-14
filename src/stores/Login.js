import { makeObservable, observable, action } from "mobx";
import api from '../api/api.js'

export default class LoginStore {

    userInfo = {
        id: '',
        username: '',
        registered: '',
        last_login: '',
        birthdate: null,
        email: '',
        gender: '',
    }

    projectsInfo = null

    lastTaskInfo = null

    ongoingTask = null

    async makeLogin (username, password) {
        
        var status;
        try {

            await api.post("/login", {
                username, 
                password

            }).then((response) => {
                localStorage.setItem('token', response.data.token)
                status = response.status
                this.setUserInfo(response.data);
            })

        }catch(e){
            console.log(e);
        }
        return status
        
    }

    async register (email, username, password, password_repeat) {

        var status;

        try {

            await api.post("/sign-up", {
                email, 
                username,
                password,
                password_repeat

            }).then((response) => {
                localStorage.setItem('token', response.data.token)
                status = response.status
                this.userInfo = response.data.user
            })

        }catch(e){
            console.log(e);
        }
        return status
    }

    async getProjects () {

        this.projectsInfo = [{
            id: null,
            name: null,
            description: null,
            participant: null,
            dueDate: null,
            category: null,
            color: null,
            totalTasks: null,
            remainingTasks: null,
            doneTasks: null
        }]

        try {

            await api.get(`/projects/projects?participant=${this.userInfo.username}`)
            .then((response) => {
                this.projectsInfo = response.data.projects
                console.log(response)
            })

        }catch(e){
            console.log(e);
        }

    }

    async addProject (name, description, dueDate, category, color) {

        try {

            await api.post(`/projects/newProject`, {
                name,
                description,
                participant: this.userInfo.username,
                dueDate,
                category,
                color
            })
            .then((response) => {
                console.log(response)
            })

        }catch(e){
            console.log(e);
        }

    }

    async getOngoingTask(username){

        try {

            await api.post(`/tasks/get-ongoing-task`, {
                username
            })
            .then((response) => {
                this.ongoingTask = response.data.task
            })

        }catch(e){
            console.log(e);
        }

    }

    async getTasksStatus(username, project){

        try {

            await api.post(`/projects/get-tasks-status`, {
                username,
                project
            })
            .then((response) => {

                for(var i = 0; i < this.projectsInfo.length; i++){
                    if(this.projectsInfo[i].name == project){
                        this.projectsInfo[i].totalTasks = response.data.totalTasks
                        this.projectsInfo[i].remainingTasks = response.data.remainingTasks
                        this.projectsInfo[i].doneTasks = response.data.doneTasks
                    }
                }
                return response.data;
            })

        }catch(e){
            console.log(e);
        }

    }

    async sendEmailForgotPassword(email) {

        try{

            await api.post('/send-email-forgot-password', {
                email
            }).then((response) => {
                
                console.log(response.status)
                if (response.status == 200) return true 
                else return false
            })

        }catch(e){

            console.log(e)

        }


    }

    async updateProfileInfo(newUsername, email, password, newPassword){

        const user = this.userInfo.username

        try{

            await api.post('/update-profile-info', {
                username: user,
                newUsername,
                email,
                password,
                newPassword
            }).then((response) => {
                
                console.log(response.status)
                return response

            })

        }catch(e){

            console.log(e)

        }

    }

    async getProfileInfo(username){

        try{

            await api.post('/get-profile-info', {
                username
            }).then((response) => {
                
                console.log(response.status)
                this.setUserInfo(response.data);
                return response

            })

        }catch(e){

            console.log(e)

        }

    }

    
    setUserInfo (data) {

        console.log("data", data)

        this.userInfo.username = data.user.username
        this.userInfo.id = data.user.id
        this.userInfo.last_login = data.user.last_login
        this.userInfo.registered = data.user.registered
        this.userInfo.email = data.user.email

    }

    constructor () {
        makeObservable(this, {
          userInfo: observable,
          projectsInfo: observable,
          makeLogin: action,
          setUserInfo: action,
      })
    }

}