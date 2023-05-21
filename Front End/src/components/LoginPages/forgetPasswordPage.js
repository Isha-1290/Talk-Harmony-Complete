import React from "react";
import "./loginPage.css";
import Logo from "../student.png";
import {Link, useNavigate} from "react-router-dom";

export default function LoginPage() {
  let navigate = useNavigate();
  return (
    <div className="newApp">
      <div className="loginBox">
        <img src={Logo} alt="" />
        <h1>PocketMind</h1>
        
      </div>
      <div className="loginForm">
          <form onSubmit={()=>{navigate("/OTPPage")}} action="#">
            <h4>Forget Password</h4>
            <input type="text" placeholder="Phone number or email address" />
            <input className="submit" type="submit" value="NEXT" />
           </form>
           
        </div>
        
    </div>
  );
}
