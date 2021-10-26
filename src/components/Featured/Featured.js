import React, { useContext } from 'react';

import './Featured.css';
// import FeaturedImg from '../../assets/img/eatured/featured.jpg'
import FeaturedImg1 from '../../assets/img/featured/featured1.jpg'
import { ThemeContext } from '../../contexts/ThemeContext';
import { featuredData } from '../../data/featuredData'



function Featured() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
           

            <div className="services-header">
                        <h1 style={{color: theme.header}}>Featured</h1>
                    </div>
            <div className="about-body index">
                <div className="about-img1 index">
                    <img 
                        src={FeaturedImg1}  
                        alt="" 
                    />
                </div>
                <div className="about-description">
                    <h1 style={{color: theme.header}}>{featuredData.label}</h1>
                    <h2 style={{color: theme.primary}}>{featuredData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{featuredData.description}<br/><br/>{featuredData.description1}<br/><br/>{featuredData.description2}</p>
                </div>
            </div>
        </div>

    )
}

export default Featured