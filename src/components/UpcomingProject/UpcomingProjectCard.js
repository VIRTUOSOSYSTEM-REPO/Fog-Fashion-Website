import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';
import { FcBusinesswoman } from "react-icons/fc";
import eduImgWhite from '../../assets/svg/education/cam.svg'
import eduImgBlack from '../../assets/svg/education/cam.svg'
import './Education.css'

function UpcomingProjectCard({ id, institution, course, startYear, endYear, link }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.gray,
            "&:hover": {
                backgroundColor:theme.bannerBlue,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <a key={id} className={`education-card index ${classes.educationCard}`} href={link}>
                <div className="educard-img index" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                    <i className="service-icon">{FcBusinesswoman}</i>
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.fogYellow}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                </div>
            </a>
        </Fade>        
    )
}

export default UpcomingProjectCard
