import './Home.css'
import home from '../../assets/home.svg'
import SideMenu from '../../components/SideMenu/SideMenu.jsx'
import {Button} from 'react-bootstrap'
function Home() {
  
  return (
      <div className="HomeSection">
        <div className="Section">
          <img src={home} className="dev-home" alt="logo" style={{height: '90%', width: '30%', marginTop: '2.5%'}}/>
          <div style={{marginTop: '2%', marginRight: '5%'}}>
            <div style={{fontSize: '30px'}}>
            Welcome, Giuliano. You have 
            </div>
            <div className="Notifications">
              0 new notifications
            </div>
          </div>
          <div className="YourSummary">
            <div style={{marginRight: '18%', fontSize: 24, marginBottom: '2%'}}>
              Your summary
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
            <div className="SummarySection">
              Projeto X
              <div className="SummaryInfo">
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
            <div className="SummarySection">
              Projeto Y
              <div className="SummaryInfo">
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
            <div className="SummarySection">
              Projeto Z
              <div className="SummaryInfo">
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
          </div>
        </div>
      </div>
  );
}

export default Home;
