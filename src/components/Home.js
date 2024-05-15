import Typewriter from 'typewriter-effect'
import React from 'react';
import './Home.css';

const Home = () => {    
    return ( 
        <div id="/" className="home-page">
            <div className="outerblock">
                <div className="innerblock">
                    <h1>HEMANTH SAI GOKARAKONDA</h1>
                    <h2 className="Animated-text"> <Typewriter 
                        onInit={(Typewriter)=>{
                            Typewriter
                            .typeString("Full-Stack Developer 👨‍💻")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("ETL Developer 🔢")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Salesforce Developer ☁️")
                            .deleteAll()
                            .start();
                        }}
                        options={{ loop: true }}
                    />
                    </h2>
                    <h3>If you believe you can achieve!</h3>
                    <button className="CB">Contact Me!</button>
                    <button className="RB">Get Resume</button>
                </div>
                <div className="imgcntr">
                    <div className="shooting-star"></div>
                </div>
            </div>
        </div>    
    );
}
 
export default Home;