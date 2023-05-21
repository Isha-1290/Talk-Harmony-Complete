import React from 'react'
import NavbarAfter from '../../components/NavbarAfter1/NavbarAfter1'
import Pointers from '../../components/pointers/Pointers'
import SimranJoshi from './SimranJoshi.jpg'
import Ajay from './Ajay.jpg'
import Gunjan from './Gunjan.jpg'
import Parinay from './Parinay.jpg'
import VanshitaRohela from './VanshitaRohela.jpg'
import Akanksha from './Akanksha.jpg'
import Isha from './Isha.jpg'
import bhanu from './bhanu.jpg'
import headerImg from './header-opt.jpg'
import './About.css'
const About = () => {
  return (
    <>
    <NavbarAfter/>
    <Pointers/>
    <div className="details">
        <div className="details-header">
            <div className="header-text">
            TalkHarmony is the outlet platform for all the people suffering with difficulties in expressing their emotions. 
This web-application provides some eminent features that makes talking about feelings and loneliness more comfortable.
Our web-application will provide eminent features making it easier to talk about feelings. We aim to figure out positive ways to involve ourselves in conversations that will ultimately get everyone the help they need.   
            </div> 
            <div className="header-image">
                <img src={headerImg} alt="header-img"/>
            </div>
        </div>
        <hr/>
        <div className="team-head">
        <h1> Team</h1>
        </div>
        <div className="team">

            <div className='team-card'>
                <div className="team-image">
                <img src={Ajay} alt="ajaysingh"/>
                </div>
                <div className="team-details">
                    <h3>Ajay Singh</h3>
                    <a href="https://www.linkedin.com/in/ajay-singh-1154b41b7/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                <img src={Parinay} alt="parinayseth"/>
                </div>
                <div className="team-details">
                    <h3>Parinay Seth</h3>
                    <a href="https://www.linkedin.com/in/parinayseth0712/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                <img src={bhanu} alt="bhanupratapsingh"/>
                </div>
                <div className="team-details">
                    <h3>Bhanu Pratap Singh</h3>
                    <a href="http://www.linkedin.com/in/bhanu-burman-5770a9204">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                <img src={Akanksha} alt="akanksha raj"/>
                </div>
                <div className="team-details">
                    <h3>Akanksha Raj</h3>
                    <a href="https://www.linkedin.com/in/akanksha-raj-202404209/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                <img src={Isha} alt="ishakondurkar"/>
                </div>
                <div className="team-details">
                    <h3>Isha Kondurkar</h3>
                    <a href="https://www.linkedin.com/in/isha-kondurkar-a216b0213/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                    <img src={SimranJoshi} alt="simranjoshi"/>
                </div>
                <div className="team-details">
                    <h3>Simran Joshi</h3>
                    <a href="https://www.linkedin.com/in/simran-joshi-443105212/">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                <img src={VanshitaRohela} alt="vanshitarohela"/>
                </div>
                <div className="team-details">
                    <h3>Vanshita Rohela</h3>
                    <a href="https://www.linkedin.com/in/vanshita-rohela-37b7a4200">LinkedIn </a>
                </div>
            </div>

            <div className='team-card'>
                <div className="team-image">
                <img src={Gunjan} alt="gunjanaggarwal"/>
                </div>
                <div className="team-details">
                    <h3>Gunjan Aggarwal</h3>
                    <a href="https://www.linkedin.com/in/gunjanagrawal1622/">LinkedIn </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About