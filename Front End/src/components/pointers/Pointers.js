import React from 'react'
import './pointers.css' 
import { useNavigate } from 'react-router-dom';

import {AiFillHome} from 'react-icons/ai';
import {RxDashboard} from 'react-icons/rx';
import {CgProfile} from 'react-icons/cg';
// import {CiSettings} from 'react-icons/ci';
import {BiLogOut} from 'react-icons/bi';
import {BsFillInfoCircleFill} from 'react-icons/bs';

const Pointers = () => {
  let navigate = useNavigate(); 
  return (
    <div className="ot">
    <div id="pointers">
        <div className="object" onClick={()=>{navigate("/Home")}}><AiFillHome/></div>
        <div className="object "onClick={()=>{navigate("/Dashboard")}}><RxDashboard/></div>
        <div className="object" onClick={()=>{navigate("/Profile")}}><CgProfile/></div>
        {/* <div className="object" onClick={()=>{navigate("/setting")}}><CiSettings/></div> */}
        <div className="object "onClick={()=>{navigate("/about")}}><BsFillInfoCircleFill/></div>
        <div className="object" onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}><BiLogOut/></div>
    </div>
    </div>
  )
}

export default Pointers