import React from 'react';
import sideImage from "./frontpagebg/sideimage.jpg";
import sideImage1 from "./frontpagebg/sideimage1.jpg";
import './frontPage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';


export default function FrontPage() {
  let navigate = useNavigate();
  return (
    <div className="front-page">
      {<Navbar/>}
      <div className="front-main-container">
        <div className="fpage-left"> 
         <img src={sideImage} alt=""/>
        </div>
        

        <div className="fpage-right">
          <div className="mainText">
            <h1>Write what you feel !
              <br/>
              Join Anonymously !
            </h1>
            <p>
              Talk Harmony is the oulet platform for all the people
              suffering with difficulties in expressing their emotions.
              This web-application provides some eminenent features
              that makes talking about feelings and loneliness more
              comfortable. Some of these features are:
              <ul>
              <li>You can write any random thought without revealing
                your identity
              </li>
              <li>
                You can read thoughts of other people going through same 
                feeling of loneliness and helplessness and find solace with them.
              </li>
              </ul>
            </p>
            <button className = "mainButton" onClick={()=>{navigate("/LoginPage")}}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="Desc-container">
        <div className="Desc-content-1">
          <p>
            If you ever looked at AI image generators like Dall-E and Midjourney and thought, hey, I wish could upload my photos to them and have them edited with just text descriptions, then you are in luck. A new AI image editor tool called InstructPix2Pix allows you to do just that.
            Available on the AI tool website Hugging Face, which also hosted the viral bot Dall-E Mini, InstructPix2Pix asks for an input image and prompt instructions and outputs a touched-up image with the changes you requested.
            If you ever looked at AI image generators like Dall-E and Midjourney and thought, hey, I wish could upload my photos to them and have them edited with just text descriptions, then you are in luck. A new AI image editor tool called InstructPix2Pix allows you to do just that.
            Available on the AI tool website Hugging Face, which also hosted the viral bot Dall-E Mini, InstructPix2Pix asks for an input image and prompt instructions and outputs a touched-up image with the changes you requested.
            If you ever looked at AI image generators like Dall-E and Midjourney and thought, hey, I wish could upload my photos to them and have them edited with just text descriptions, then you are in luck. A new AI image editor tool called InstructPix2Pix allows you to do just that.
            Available on the AI tool website Hugging Face, which also hosted the viral bot Dall-E Mini, InstructPix2Pix asks for an input image and prompt instructions and outputs a touched-up image with the changes you requested.
            If you ever looked at AI image generators like Dall-E and Midjourney and thought, hey, I wish could upload my photos to them and have them edited with just text descriptions, then you are in luck. A new AI image editor tool called InstructPix2Pix allows you to do just that.
            Available on the AI tool website Hugging Face, which also hosted the viral bot Dall-E Mini, InstructPix2Pix asks for an input image and prompt instructions and outputs a touched-up image with the changes you requested.
          </p>
        </div>
          <div className="Desc-content-2">
            <div className="Desc-content-2-text">
              <p>
              If you ever looked at AI image generators like Dall-E and Midjourney and thought, hey, I wish could upload my photos to them and have them edited with just text descriptions, then you are in luck. A new AI image editor tool called InstructPix2Pix allows you to do just that.
              Available on the AI tool website Hugging Face, which also hosted the viral bot Dall-E Mini, InstructPix2Pix asks for an input image and prompt instructions and outputs a touched-up image with the changes you requested.
              If you ever looked at AI image generators like Dall-E and Midjourney and thought, hey, I wish could upload my photos to them and have them edited with just text descriptions, then you are in luck. A new AI image editor tool called InstructPix2Pix allows you to do just that.
              Available on the AI tool website Hugging Face, which also hosted the viral bot Dall-E Mini, InstructPix2Pix asks for an input image and prompt instructions and outputs a touched-up image with the changes you requested.
              </p>
            </div>
            <div className="Desc-content-2-img">
              <img src={sideImage1} alt=""/>
            </div>
          </div>
        </div> 
      
      
        {<Footer/>}
        
    </div>
  )
}
