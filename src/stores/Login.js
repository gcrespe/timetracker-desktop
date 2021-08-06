import { makeObservable, observable, action } from "mobx";
import axios from 'axios'

export default class LoginStore {

    userInfo = {
        email: '',
        nome: '',
        cpf: '',
        senha: '',
        id: ''
    }

    projectsInfo = [
        {
            name: 'Project X',
            description: 'Web and API applications project for Banco Inter. ReactJs, Electon and Java languages used',
            issuesDone: 32,
            timeSpent: 324,
            remainingIssues: 142,
            remainingTime: 678,
            releaseDate: '22/08/2021',   
        },
        {
            name: 'Project Y',
            description: 'Web and API applications project for Banco Inter. ReactJs, Electon and Java languages used',
            issuesDone: 5,
            timeSpent: 34,
            remainingIssues: 59,
            remainingTime: 1562,
            releaseDate: '11/10/2021',   
        },
        {
            name: 'Project Z',
            description: 'Web and API applications project for Banco Inter. ReactJs, Electon and Java languages used',
            issuesDone: 88,
            timeSpent: 658,
            remainingIssues: 21,
            remainingTime: 791,
            releaseDate: '02/09/2021',   
        }   
    ]

    async makeLogin (email, password) {

        console.log(email, password)

        try {

            var validation = false;

            const response = await axios.get('https://60ff6e73257411001707896e.mockapi.io/timetracker/api/login')

            response.data.map((res) => {
                if(res.email === email){
                    if(res.senha === password){
                        this.setUserInfo(res);
                        validation = true;
                        return res;
                    }
                }
                        
            })

            return validation;

        }catch(e){

        }
        
    }

    setUserInfo (data) {

        this.userInfo.cpf = data.cpf
        this.userInfo.email = data.email
        this.userInfo.nome = data.nome
        this.userInfo.senha = data.senha
        this.userInfo.id = data.id

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