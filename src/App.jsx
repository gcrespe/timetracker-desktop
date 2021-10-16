import './App.css';
import React from 'react';
import './index.css';
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import CalendarPage from './pages/calendar/Calendar.jsx'
import TaskList from './pages/taskList/TaskList.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './components/SideMenu/SideMenu.jsx'
import Tray from './pages/tray/Tray.jsx'
import "react-datepicker/dist/react-datepicker.css";

const App = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/tray" component={Tray} />
          <SideMenu>
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/calendar" component={CalendarPage} />
            <Route path="/taskList" component={TaskList} />
          </SideMenu>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
