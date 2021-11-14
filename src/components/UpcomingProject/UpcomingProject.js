import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './UpcomingProjectCard';
import Img from "../../assets/img/upcoming.png"
import { educationData } from '../../data/educationData'

function UpcomingProject() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body index">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Upcoming <span  style={{color: theme.header}}>Project</span></h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            link={edu.link}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image index">
                    <img src={Img} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default UpcomingProject
