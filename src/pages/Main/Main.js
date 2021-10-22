import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Helmet } from 'react-helmet'
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../Const/particle.js';
import { Navbar, Footer, Landing, About, Featured, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import FogWorkshop from '../../components/Blog/FogWorkshop.js';
import Head from '../Carousel/Carousel.js';

function Main() {
    return (
        <div>

            <Navbar />
            <Container>
				<Row>
            <Head />
            </Row>
			</Container>
            {/* <Landing /> */}
            {/* </Animate> */}
            <About />
            <Services />
            <Featured />
            <Skills />
            <Education />
            
            <Experience />
            
            <Achievement />
            
            <Testimonials />

            <FogWorkshop />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
