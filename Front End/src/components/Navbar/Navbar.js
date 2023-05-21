import React from 'react'
import NavLogo from "../icon.png";
import { useNavigate } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    let navigate = useNavigate();
  return (
    <div className="navbar-nac">
        <div className="left-nac">
          <img src={NavLogo} alt="fdf" />
          TalkHarmony
        </div>
        <div className="right-nac">
          <button onClick={()=>{navigate("/LoginPage")}}>
            Log in
          </button>
          <button onClick={()=>{navigate("/SignupPage")}}>
            Sign up
          </button>
        </div>
      </div>
  )
}

export default Navbar