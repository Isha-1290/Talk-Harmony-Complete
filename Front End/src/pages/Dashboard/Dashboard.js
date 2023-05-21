import React from 'react'
import Card1 from './Card1.png'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import '../../components/Card'
import Card from '../../components/Card'
import {useState, useEffect} from 'react';
import NavbarAfter1 from '../../components/NavbarAfter1/NavbarAfter1'
import Pointers from '../../components/pointers/Pointers';
import axios from 'axios';

const Dashboard = () => {
  let navigate = useNavigate();
  
  const [profileFields, setProfileFields] = useState({});
  const fields = [
    { name: "Username", key: "username" },
  ];

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200 && response.data.status === "ok") {
        setProfileFields(response.data.data.profile);
      } else {
        alert("something went wront");
      }

      console.log(response.data);
      console.log(profileFields);
    } catch (error) {
      console.error(error);
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);


  const val=[
    {
        "id":"1",
        "username":"Parinay Seth",
        "date":"17-may-2018",
        "text":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    },
    {
      "id":"1",
      "username":"Parinay Seth",
      "date":"17-may-2018",
      "text":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    },
    {
      "id":"1",
      "username":"Parinay Seth",
      "date":"17-may-2018",
      "text":"Don't be sad just because now I'm dead. I'll be waiting for you at my deathbed... No it's not that gloomy here my loved ones are here. Oh yes sometimes i feel desolated because there's a part of me missing here and i think that's you. I feel desolated remembering those days we spent together. Those nights we cried together. And I'm regretting too that i wish i had spent a little more time with you. It would be interesting if we died together like we spent our lives together. Interesting because, Remember how we used to loved that lyrics by the Smiths to die by your side is such a heavenly way to die..... wouldn't be interesting if that came true. I'm just missing you up there and waiting for you to come here and recreate that life again that we've lived down there.",
    }
  ]
  function DisplayData(){
    return(
    
    val.map((progps)=>{
      console.log("yes 1");
    return (<Card props={progps}/>)
  }))}
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };

  

  return (
    <>
    <NavbarAfter1/>

    <Pointers/>
    <div className="dash-container">
      <div className="dashboard-header">
        <div className="dashboard-profile">
          <div className ="dashboard-dp">
          <div
              className="dp-out"
              style={{
                backgroundImage:
                  profileFields && profileFields.dp_id
                    ? `url('${process.env.REACT_APP_API_URL}/picture/${profileFields.dp_id}')`
                    : `url("${process.env.PUBLIC_URL + "/Card1.png"}")`,
                backgroundSize: "cover",
              }}
            ></div>
            {/* <div className="dp-out">
              <img src={Card1} alt="Dp"/>
            </div> */}
          
            {fields.map(({ key }) => {
                return (
                  <h3><strong>
                    {profileFields[key]}
                    </strong>
                  </h3>
                );
              })}
          </div>
          <div className="dashboard-description">
            <p className="description-bio-head">Bio</p>
            <p className="description-bio">
            Ambivert
            <br/>
            #hermit
            <br/>
            Lob: Designs and Sketches
            <br/>
            Vit'24
            <br/>
            You will build a small tic-tac-toe game
            during this tutorial.This tutorial does not assume any 
            existing React knowledge. 
            
            </p>
          </div>
        </div>
        <div className="dashboard-stats">
          <div>
          <div className="dashboard-posts">
            <h2>299</h2>
            <p>Post</p>
          </div>
          <div className="dashboard-likes">
            <h2>299</h2>
            <p>Likes</p>
          </div>
          </div>
          <div>
          <div className="dashboard-saved">
            <h2>299</h2>
            <p>Saved</p>
          </div>
          <div className="dashboard-comments">
            <h2>19k</h2>
            <p>Comments</p>
          </div>
          </div>
        </div>
      </div>
      <div className="dashboard-collection">
        <button id="but" onClick={handleClick}>Post</button>
        <button id="but" onClick={handleClick}>Saved</button>
        <button id="but" type="button" onClick={handleClick}>Archieves</button>
      </div>
      {isShown && 
          <DisplayData/>}
      
      {/* <hr/> */}

    </div>
    </>
  )
}

export default Dashboard