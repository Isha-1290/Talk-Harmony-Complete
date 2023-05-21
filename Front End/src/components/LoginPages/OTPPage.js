import React from 'react'
import './OTPPage.css'
import Logo from "../student.png";
import { useNavigate } from 'react-router-dom';

export default function OTPPage() {

  let array = [];
  let navigate = useNavigate();
  const clickEvent = (input, nextInputId) => {
    if (input.value.length) {
      document.getElementById(nextInputId).focus();
    }
  }
  const oneDigitHandler = (event,field) => {
    // input = parseInt(input, 10);
    const target = event.target;
    if (target.value.length > 1) {
      target.value = target.value.slice(0, 1);
    }
    console.log(target.value);
    if(array.length<4){

      array.push(target.value.slice(0,1));
    }
    console.log(array);
  }

  return (
    <div className="newApp">
      <div className="loginBox">
        <img src={Logo} alt="" />
        <h1>PocketMind</h1>
      </div>
        <p style={{color:"red",marginTop:"43px"}}>Invalid OTP,Try Again</p>
        <p >Phone number or email address (Already visible)</p>
        <p style={{fontWeight:"bold",fontSize:"medium"}}>Enter OTP</p>
      <div className="otpForm">
        <form>
        <input type="number" id="first" maxLength={1} onKeyUp={() => clickEvent(document.getElementById("first"), "sec")} onInput={(event) => {oneDigitHandler(event,"first")}}/>
        <input type="number" id="sec" maxLength={1} onKeyUp={() => clickEvent(document.getElementById("sec"),"third")} onInput={(event) => {oneDigitHandler(event,"sec")}}/>
        <input type="number" id="third" maxLength={1} onKeyUp={() => clickEvent(document.getElementById("third"), "forth")} onInput={(event) => {oneDigitHandler(event,"third")}} />
        <input type="number" id="forth" maxLength={1} onInput={(event) => {oneDigitHandler(event,"forth")}}/>
            <p>Didn't get the OTP?</p>
            <p>Try agian after 60 seconds</p>
            <button>RESEND OTP</button>
            <button onClick={()=>{navigate('/LoginPage')}}>SUBMIT</button>
        </form>
      </div>
      
    </div>
  )
}
