import './Home.css'
import home from '../../assets/home.svg'
import Card from 'react-bootstrap/Card'
import { Button, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom'
import { inject, observer } from 'mobx-react'
import  Timer from 'react-compound-timer'
import { Component, useState, useEffect } from 'react'
import TimerDisplay from '../../components/TimerDisplay'

 
const Home = inject('login', 'taskList', 'timerStore')(observer((props) => {
  
  const { login, taskList, timerStore } = props;

  let firstButton;
  let secondButton;
  let thirdButton

  if (!timerStore.isRunning) {

    firstButton = (
      <>
        <style type="text/css">
            {`
            .btn-outline-secondary {
            border-color: #112d4e;
            color: #112d4e;
            width: 70px;
            }
            .btn-outline-secondary:hover {
            background-color: #112d4e;
            color: #ffffff;
            border-color: #112d4e;
            }
            `}
        </style>
        <Button variant="outline-secondary" style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}} onClick={() => timerStore.resetTimer()}>Reset</Button>
      </>
      
    );

    secondButton = (
        <Button variant="outline-secondary" onClick={() => timerStore.startTimer()}>Start</Button>
    );

    thirdButton = (
        <Button variant="outline-secondary" onClick={() => timerStore.resetTimer()}>Finish</Button>
    );
  } else {

    firstButton = (
      <>
        <style type="text/css">
            {`
            .btn-outline-secondary {
            border-color: #112d4e;
            color: #112d4e;
            width: 70px;
            }
            .btn-outline-secondary:hover {
            background-color: #112d4e;
            color: #ffffff;
            border-color: #112d4e;
            }
            `}
        </style>
        <Button variant="outline-secondary" style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}} onClick={() => timerStore.resetTimer()}>Reset</Button>      
      </>
    );

    secondButton = (
        <Button variant="outline-secondary" onClick={() => timerStore.stopTimer()}>Stop</Button>
    );

    thirdButton = (
        <Button variant="outline-secondary" onClick={() => timerStore.resetTimer()}>Finish</Button>
    );
    
  }

  return (
      <div className="HomeSection">
        <div className="Section">
          <div style={{width: '60%', height: '100%', borderRadius: '20px', marginLeft: '-3%'}}>
          </div>
          <div style={{width: '38%', height: '100%', borderRadius: '20px', marginRight: '-3%'}}>

            <div style={{fontSize: 30, letterSpacing: 2}}>
              <div>
                {timerStore.mainDisplay}
              </div>
              <div>
                <div>
                  <ButtonGroup size="md">
                    {firstButton}
                    {secondButton}
                    {thirdButton}
                  </ButtonGroup>
                </div>
                <div>
                  {timerStore.lapData.map((el) =>
                    <TimerDisplay
                      key={el.lap.id}
                      leftText={el.text}
                      rightText={el.lap.display}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="DownSection">
          <div className="Daily">
            { login.projectsInfo.map( project => {
              return (
                <div style={{marginLeft: '1%', marginRight: '1%'}}>
                  <Card style={{ width: '20rem' , border: 'none' }} className="text-left">
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>
                        {project.description}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem style={{border: 'none'}}>Total issues done: {project.issuesDone}</ListGroupItem>
                      <ListGroupItem style={{border: 'none'}}>Total time spent: {project.timeSpent}</ListGroupItem>
                      <ListGroupItem>Release date: {project.releaseDate}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <ButtonCustom text={"Details"}/>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
  );
}));

export default Home;
