import React, { Component, useContext } from 'react';
import './style.css';
import {Container, Row} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
// import HamburgerMenu from '../../components/hamburger_menu';
// import particles from '../../const/project_particle.js';
import Particles from 'react-particles-js';
import ProjectBody from '../../components/Gallery';
import { ThemeContext } from '../../contexts/ThemeContext';

function Gallery1() {
  const { theme } = useContext(ThemeContext);
   
    return (
        <Container className="About-header" fluid={true}>
                      <div className="services-header">
                        <h1 style={{color: theme.white}} >Our <span style={{color: theme.header}}>Events</span></h1>
                    </div>
           {/* <Animate to="1" from="0" attributeName="opacity"> */}
           
           <Row className="About-main">
           {/* <Particles
            params={particles}
            className="particle"
          /> */}
              {/* <HamburgerMenu /> */}
              <ProjectBody />
           </Row>
           <br/>
          <Row className="About-footer">
          </Row>
           {/* </Animate> */}
       </Container>
    );
  }


export default Gallery1;
