import TaskListStore from './TaskListStore'
import LoginStore from './Login'
import CalendarStore from './CalendarStore'

export const Stores = {
    taskList: new TaskListStore(),
    login: new LoginStore(),
    calendar: new CalendarStore()
}