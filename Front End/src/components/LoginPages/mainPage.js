import React from "react";
import NavLogo from "../student.png";
import userIcon from "../user_icon.png";
import settingIcon from "../setting-icon.png";
import mainPage from "./mainPage.css";
import { useNavigate } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai';
import {RxDashboard} from 'react-icons/rx';
import {CgProfile} from 'react-icons/cg';
import {CiSettings} from 'react-icons/ci';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import {BiLogOut} from 'react-icons/bi';

export default function MainPage() {
  let navigate = useNavigate();
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }
  
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }

  var menuState = 0 // close
function open_close() {
  if(menuState === 0){
     menuState = 1;
     document.getElementById("mySidenav").style.width = "250px";
     document.getElementById("mySidenav").style.boxShadow="3px 20px 20px 5px rgb(78, 74, 75)";
    }
    else {
      menuState = 0;
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.boxShadow="none";
  }
  console.log(menuState);
} 
  return (
    <div className="main-App">
      <nav className="navbar">
        <div className="left">
          <img src={NavLogo} alt="" />
          TalkHarmony
        </div>
        <div className="right">
          <img src={userIcon} alt=""/>
          {/* <input type="file" name="upload-img" id="user_img" /> */}
          <p>User Name</p>
        </div>
      </nav>
      <div id="mySidenav" class="sidenav">
  {/* <a href="#" class="closebtn" onClick={(e) => { e.preventDefault(); closeNav(); }}>&times;</a> */}
  <div className="user-buttons">

        <button><AiFillHome/>Home</button>
        <button><RxDashboard/>DashBoard</button>
        <button><CgProfile/>Profile</button>
        <button><CiSettings/>Settings</button>
        <button><BsFillInfoCircleFill/>About Us</button>
        </div>
        <div className="log-out">

        <button onClick={()=>{navigate("/")}}><BiLogOut/>Logout</button>
        </div>
</div>
      {/* <div className="left-container">
        <div className="user-buttons">

        <button><AiFillHome/>Home</button>
        <button><RxDashboard/>DashBoard</button>
        <button><CgProfile/>Profile</button>
        <button><CiSettings/>Settings</button>
        <button><BsFillInfoCircleFill/>About Us</button>
        </div>
        <div className="log-out">

        <button onClick={()=>{navigate("/")}}><BiLogOut/>Logout</button>
        </div>
      </div> */}
        <div className="right-container">
          hello
        </div>
    </div>
  );
}
