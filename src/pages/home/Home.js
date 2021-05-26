import './Home.css'
import { BiHomeAlt, BiCalendarAlt} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosExit } from "react-icons/io";
import { BsCardList, BsPencilSquare } from "react-icons/bs";
import home from '../../assets/home.svg'

function Home() {
  return (
    <div className="Page">
      <div className="MenuSection">
        <div className="SecondaryIcon">
          <div className="Icon">
            <CgProfile color="#a7abb3" size="25"/>
          </div>
        </div>
        <div className="CentralIcons">
          <div className="Icon">
            <BiHomeAlt color="#a7abb3" size="25"/>
          </div>
          <div className="Icon">
            <BsPencilSquare color="#a7abb3" size="25"/>
          </div>
          <div className="Icon">
            <BiCalendarAlt color="#a7abb3" size="25"/>
          </div>
          <div className="Icon">
            <BsCardList color="#a7abb3" size="25"/>
          </div>
        </div>
        <div className="SecondaryIcon">
          <div className="Icon">
            <IoIosExit color="#a7abb3" size="25"/>
          </div>
        </div>
      </div>
      <div className="HomeSection">
        <div className="UpperSection">
          <img src={home} className="dev-home" alt="logo" style={{height: '100%', width: '40%'}}/>
          <div style={{fontSize: '50px', color: '#000000'}}>
          Welcome to your new lifestyle
          </div>
        </div>
        <div className="LowerSection">

        </div>
      </div>
    </div>
  );
}

export default Home;
