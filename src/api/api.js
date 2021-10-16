import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

axios.interceptors.request.use(
    config => {
        config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.headers.get['Content-Type'] = 'application/json';

export default api;