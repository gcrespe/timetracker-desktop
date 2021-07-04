import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import Calendar from './pages/calendar/Calendar.jsx'
import TaskList from './pages/taskList/TaskList.jsx'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './components/SideMenu/SideMenu.jsx'
import { Provider } from 'mobx-react';
import { Stores } from './stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...Stores}>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={App} />
            <SideMenu>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/taskList" component={TaskList} />
            </SideMenu>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
