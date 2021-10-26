import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";
import { Helmet } from 'react-helmet'
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../Const/particle.js';
import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { workshopData } from '../../data/workshopData'
import SingleBlog from './SingleBlog/SingleBlog';


function FogWorkshop() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {workshopData.length > 0 && (
                            <Animate to="1" from="0" attributeName="opacity">
                            <Particles
                            params={particles}
                            className="particle"
                            />   
                            
                            
                <div className="blog" id="blog" style={{backgroundColor: theme.secondary}}>
                    <div className="blog--header">
                        <h1 style={{color: theme.primary}}>FOG Workshop</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {workshopData.slice(0, 3).map(blog => (
                                <SingleBlog 
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div> 

                        {workshopData.length > 3 && (
                            <div className="blog--viewAll index">
                                <Link to="/blog">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                </Animate>
            )}

        </>
    )
}

export default FogWorkshop
