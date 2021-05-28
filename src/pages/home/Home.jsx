import './Home.css'
import home from '../../assets/home.svg'
import SideMenu from '../../components/SideMenu/SideMenu.jsx'

function Home() {
  
  return (
    <div className="Page">
      <SideMenu />
      <div className="HomeSection">
        <div className="Section">
          <img src={home} className="dev-home" alt="logo" style={{height: '80%', width: '30%'}}/>
          <div>
            <div style={{fontSize: '30px'}}>
            Welcome, Giuliano. You have 
            </div>
          </div>
          <div className="YourSummary">
            Your summary
          </div>
        </div>
        <div className="DownSection">
          <div className="TitleLowerSection">
            Daily summary
          </div>
          <div className="Daily">
            <div className="SummarySection">
              Projeto X
            </div>
            <div className="SummarySection">
              Projeto Y
            </div>
            <div className="SummarySection">
              Projeto Z
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
