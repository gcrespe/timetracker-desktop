import './Home.css'
import home from '../../assets/home.svg'
import SideMenu from '../../components/SideMenu/SideMenu.jsx'
import {Button} from 'react-bootstrap'
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
          <div className="TitleLowerSection">
            Daily summary
          </div>
          <div className="Daily">
            { login.projectsInfo.map( project => {
              return (
                <div className="SummarySection">
                  {project.name}
                  <div className="SummaryInfo">
                    <div className="Divider">
                      <div className="Text">
                        <div>
                          Total issues done
                        </div>
                        <div>
                          Total time spent
                        </div>
                        <div>
                          Remaining issues
                        </div>
                        <div>
                          Remaining time
                        </div>
                        <div>
                          Release date
                        </div>
                      </div>
                      <div className="Text2">
                        <div>
                          {project.issuesDone} issues
                        </div>
                        <div>
                          {project.timeSpent} hours
                        </div>
                        <div>
                          {project.remainingIssues} issues
                        </div>
                        <div>
                          {project.remainingTime} hours
                        </div>
                        <div>
                          {project.releaseDate}
                        </div>
                      </div>
                    </div>
                      <>
                        <style type="text/css">
                          {`
                          .btn-outline-secondary {
                            border-color: #112d4e;
                            color: #112d4e;
                          }
                          .btn-outline-secondary:hover {
                            background-color: #112d4e;
                            color: #ffffff;
                            border-color: #112d4e;
                          }
                          `}
                        </style>
                        <Button style={{width: '60%', height: '10%', marginLeft: '17%'}} variant="outline-secondary">
                          <div style={{marginTop: "-5px"}}>
                            Details
                          </div>
                        </Button>
                      </>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
  );
}));

export default Home;
