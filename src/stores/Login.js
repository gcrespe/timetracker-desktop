import { makeObservable, observable, computed, action, autorun } from "mobx";
import axios from 'axios'

export default class LoginStore {

    userInfo = {
        nome: 'Giuliano',
        email: 'gcrespe3@hotmail.com',
        cpf: '43134782804'
    }

    projectsInfo = [
        {
            name: 'Project X',
            issuesDone: 32,
            timeSpent: 324,
            remainingIssues: 142,
            remainingTime: 678,
            releaseDate: '22/08/2021',   
        },
        {
            name: 'Project Y',
            issuesDone: 5,
            timeSpent: 34,
            remainingIssues: 59,
            remainingTime: 1562,
            releaseDate: '11/10/2021',   
        },
        {
            name: 'Project Z',
            issuesDone: 88,
            timeSpent: 658,
            remainingIssues: 21,
            remainingTime: 791,
            releaseDate: '02/09/2021',   
        }   
    ]

    notificationCount = 0;

    makeLogin = async (email, password) => {
        await axios.post(`https://localhost:3300/auth/autenticar`, { email, password })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.userInfo = res.data;
                })
    }

    setUserInfo (nome, email, senha, cpf){
        var userInfo = {
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf
        }
        this.userInfo = userInfo
    }

    constructor () {
        makeObservable(this, {
          userInfo: observable,
          notificationCount: observable,
          projectsInfo: observable,
          makeLogin: action
      })
    }

}