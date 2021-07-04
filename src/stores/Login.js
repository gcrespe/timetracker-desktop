import { makeObservable, observable, computed, action, autorun } from "mobx";
import axios from 'axios'

export default class LoginStore {

    userInfo = {
        nome: '',
        email: '',
        senha: '',
        cpf: ''
    }

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
          makeLogin: action
      })
    }

}