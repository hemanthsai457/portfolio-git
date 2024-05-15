import Switch from '@mui/material/Switch';
import * as React from 'react';
import './About.css';
import ufo from '../images/ufo.png'
import ReturnToTop from './ReturnToTop.jsx'

const label = { inputProps: { 'aria-label': 'Switch' } };

const About = () => {
  const scrollToTop=() =>{
    window.scrollTo({top:0, behavior:'smooth'});
  };

  const [isLightOn, setLightOn] = React.useState(false);

  const toggleLight =()=>{
    setLightOn(!isLightOn);
  };

    return ( 
      <div id="about" className="About-outer">
        <h1>About Me!</h1>
        <div className="lights-cntr">
          <div className="l1">
            <img className='ufo' src={ufo} alt='ufo'></img>
            <div className={`yellow-light ${isLightOn ? 'visible' : ''}`}></div>
          </div>
          <div className="myimg2"></div>
          <div className="lightswitch">
            <Switch {...label} checked={isLightOn} onChange={toggleLight}/>
          </div>
          <div className="l1">
          <img src={ufo} alt='ufo'></img>
          <div className={`yellow-light ${isLightOn ? 'visible' : ''}`}></div>
          </div>
        </div>
        <div className='about-data'>
        <div className={`text-appear ${isLightOn ? 'visible':''}`}>
          <p>Experienced professional working as a Student Assistant at Forty-Niner Shops and a Master's degree candidate in Computer Science at CSULB, I am passionate about learning and applying new technologies to solve real-world problems. I have over two years of experience in software development, working with Python, Full Stack, AWS, Salesforce, SQL, ETL, Java, and AI across various domains and industries. Experienced professional working as a Student Assistant at Forty-Niner Shops and a Master's degree candidate in Computer Science at CSULB, I am passionate about learning and applying new technologies to solve real-world problems. I have over two years of experience in software development, working with Python, Full Stack, AWS, Salesforce, SQL, ETL, Java, and AI across various domains and industries. </p>
        </div>
        </div>
        <ReturnToTop onClick={scrollToTop}/>
      </div>
     );
}

export default About;