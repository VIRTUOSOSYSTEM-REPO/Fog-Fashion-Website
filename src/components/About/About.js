import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Home from '../../assets/img/header/fashion.png'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body index">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>ASTOUNDING FACTS ABOUT <span style={{color: theme.header}}>FOG FASHION </span> STUDIO</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description}<br/><br/><span style={{fontWeight: "bold" }}>Fog Fashion Studio </span> {aboutData.description1}<br/><br/><span style={{fontWeight: "bold" }}>Fog Fashion Studio </span> {aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={Home}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
