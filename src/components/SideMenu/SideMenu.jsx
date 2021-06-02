import {useState} from 'react'
import './SideMenu.css'
import { BiHomeAlt, BiCalendarAlt} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosExit } from "react-icons/io";
import { BsCardList, BsPencilSquare } from "react-icons/bs";
import { useHistory } from 'react-router-dom'
import { Children } from 'react';

const SideMenu = (props) => {

  const [active, setActive] = useState("none")

  const history = useHistory();

  const handleClickPageRedirect = (page) => {
    history.push("/" + page);
    setActive(page);
  }

  return (
    <div className="Page">
      <div className="Menu">
        <div className="SecondaryIcon">
          <div className="Icon" style={{backgroundColor: active == "profile" ? '#f9f7f7' : '', height: active == "profile" ? '12vh' : '', paddingTop: active == "profile" ? '30%' : ''}} onClick={() => handleClickPageRedirect("profile")}>
            <CgProfile size="25"/>
          </div>
        </div>
        <div className="CentralIcons">
          <div className="Icon" style={{backgroundColor: active == "home" ? '#f9f7f7' : '', height: active == "home" ? '12vh' : '', paddingTop: active == "home" ? '30%' : ''}} onClick={() => handleClickPageRedirect("home")}>
            <BiHomeAlt size="25"/>
          </div>
          <div className="Icon" style={{backgroundColor: active == "taskList" ? '#f9f7f7' : '', height: active == "taskList" ? '12vh' : '', paddingTop: active == "taskList" ? '30%' : ''}} onClick={() => handleClickPageRedirect("taskList")}>
            <BsCardList size="25"/>
          </div>
          <div className="Icon" style={{backgroundColor: active == "calendar" ? '#f9f7f7' : '', height: active == "calendar" ? '12vh' : '', paddingTop: active == "calendar" ? '30%' : ''}} onClick={() => handleClickPageRedirect("calendar")}>
            <BiCalendarAlt size="25"/>
          </div>
        </div>
        <div className="SecondaryIcon">
          <div className="Icon" style={{backgroundColor: active == "" ? '#f9f7f7' : '', height: active == "" ? '12vh' : '', paddingTop: active == "" ? '30%' : ''}} onClick={() => handleClickPageRedirect("")}>
            <IoIosExit size="25"/>
          </div>
        </div>
      </div>
      <div style={{width: '100%', height: '100vh', marginLeft: '3%'}}>
        {props.children}
      </div>
    </div>
  );
}

export default SideMenu;
