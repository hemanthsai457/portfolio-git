import React from 'react';
import './NavBar.css';

const NavBar = () => {
    const scrollToSection = (id) =>{
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: "smooth"});
        }
    };
    return ( 
        <div className="NavBar">
            {/* <Link to="/" className="Nav-link">Technical Experience</Link> */}
            {/* <Link to="/" className="Nav-link">Projects</Link> */}
                <div className="Nav-link" onClick={()=> scrollToSection("home")}>Home</div>
                <div className="Nav-link" onClick={()=> scrollToSection("about")}>About</div>
                <div className="Nav-link" onClick={()=> scrollToSection("skills")}>Skills</div>
        </div>
     );
}
 
export default NavBar;