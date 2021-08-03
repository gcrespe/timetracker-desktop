import TaskListStore from './TaskListStore'
import LoginStore from './Login'
import CalendarStore from './CalendarStore'
import TimerStore from './TimerStore'

export const Stores = {
    taskList: new TaskListStore(),
    login: new LoginStore(),
    calendar: new CalendarStore(),
    timerStore: new TimerStore()
}