import Switch from '@mui/material/Switch';
import * as React from 'react';
import './About.css';
import ufo from '../images/ufo.png'
import trail from '../images/contact/trailhead.png';
import github from '../images/contact/github.png';
import linkedin from '../images/contact/linkedin.png';

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
          <p> Hello Everyone, I am Hemanth Sai Gokarakonda an experienced software engineer working as a Student Assistant at Forty-Niner Shops. A Master's degree candidate in Computer Science at CSULB, I am passionate about learning and applying new technologies to solve real-world problems. I have over two years of experience in software development, working with Python, Full Stack, AWS, Salesforce, SQL, ETL, Java, and AI across various domains and industries.</p>
          <div className='social-links'>
            <a href='https://www.salesforce.com/trailblazer/hemanthsai457'><img src={trail} alt='trailhead'></img></a>
            <a href="https://www.linkedin.com/in/hemanthsaigokarakonda/"><img src={linkedin} alt='linkedin'></img></a>
            <a href='https://github.com/hemanthsai457'><img src={github} alt='github'></img></a>
          </div>
        </div>
        </div>
      </div>
     );
}

export default About;