import React from 'react'
import Pointers from '../../components/pointers/Pointers'
import './Setting.css'
import NavbarAfter from '../../components/NavbarAfter1/NavbarAfter1'

const Setting = () => {
  return (
    <>
    <Pointers/>
    <div className='Setting'>
       <NavbarAfter/>

        <p>Setting</p>
        <div className="main-setting">
            <button type="button"> Change Password</button>
            <button type="button">Block Accounts</button>
            <button type="button">Help</button>
        </div>
    </div>
    </>
  )
}

export default Setting