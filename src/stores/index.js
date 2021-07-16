import TaskListStore from './TaskListStore'
import LoginStore from './Login'

export const Stores = {
    taskList: new TaskListStore(),
    login: new LoginStore()
}