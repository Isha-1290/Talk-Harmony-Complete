import React from 'react'
import { useState } from 'react';
import './Footer.css'
import Feedbackform from './Feedbackform';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-head">Provide us your feedback</h1>
        <div className="footer-feedback">
            <div className="feedback-details">
                
                {<Feedbackform/>}
            </div>
        </div>
        <br/>
            <hr/>
      <p className="footer-bottom">Copyright@237 || All rights are reserved</p>
      <br/>
    </div>
  )
}

export default Footer