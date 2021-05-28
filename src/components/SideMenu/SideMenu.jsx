import './SideMenu.css'
import { BiHomeAlt, BiCalendarAlt} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosExit } from "react-icons/io";
import { BsCardList, BsPencilSquare } from "react-icons/bs";
import { useHistory } from 'react-router-dom'

const SideMenu = () => {

  const history = useHistory();

  const handleClickPageRedirect = (page) => {
    history.push("/" + page);
  }

  return (
    <div className="MenuSection">
      <div className="SecondaryIcon">
        <div className="Icon" onClick={() => handleClickPageRedirect("profile")}>
          <CgProfile color="#a7abb3" size="25"/>
        </div>
      </div>
      <div className="CentralIcons">
        <div className="Icon" onClick={() => handleClickPageRedirect("home")}>
          <BiHomeAlt color="#a7abb3" size="25"/>
        </div>
        <div className="Icon" onClick={() => handleClickPageRedirect("newTask")}>
          <BsPencilSquare color="#a7abb3" size="25"/>
        </div>
        <div className="Icon" onClick={() => handleClickPageRedirect("calendar")}>
          <BiCalendarAlt color="#a7abb3" size="25"/>
        </div>
        <div className="Icon" onClick={() => handleClickPageRedirect("taskList")}>
          <BsCardList color="#a7abb3" size="25"/>
        </div>
      </div>
      <div className="SecondaryIcon">
        <div className="Icon" onClick={() => handleClickPageRedirect("")}>
          <IoIosExit color="#a7abb3" size="25"/>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
