import './Home.css'
import home from '../../assets/home.svg'
import Card from 'react-bootstrap/Card'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom'
import { inject, observer } from 'mobx-react'

const Home = inject('login')(observer((props) => {
  
  const { login } = props;

  return (
      <div className="HomeSection">
        <div className="Section">
          <img src={home} className="dev-home" alt="logo" style={{height: '90%', width: '30%', marginTop: '2.5%'}}/>
          <div style={{marginTop: '2%', marginRight: '5%'}}>
            <div style={{fontSize: '30px'}}>
            Welcome, {login.userInfo.nome}. You have 
            </div>
            <div className="Notifications">
              {login.notificationCount} new tasks to do
            </div>
          </div>
          <div className="YourResume">
            <div style={{marginRight: '18%', fontSize: 24, marginBottom: '2%'}}>
              Your resume
            </div>
            <div className="SummaryInfo">

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
                      <ListGroupItem>Total issues done: {project.issuesDone}</ListGroupItem>
                      <ListGroupItem>Total time spent: {project.timeSpent}</ListGroupItem>
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
