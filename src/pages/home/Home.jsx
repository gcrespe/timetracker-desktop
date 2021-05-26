import './Home.css'
import home from '../../assets/home.svg'
import SideMenu from '../../components/SideMenu/SideMenu.jsx'

function Home() {
  
  return (
    <div className="Page">
      <SideMenu />
      <div className="HomeSection">
        <div className="Section">
        <img src={home} className="dev-home" alt="logo" style={{height: '100%', width: '40%'}}/>
          <div style={{fontSize: '40px', color: '#000000'}}>
          Welcome to your new 
          </div>
          <div style={{textAlign: 'left'}}>
            lifestyle
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
