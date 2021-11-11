import React from 'react'
import Row from "react-bootstrap/Row";
import { Helmet } from 'react-helmet'
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../Const/particle.js';
import { Navbar, Footer,  About, Featured, Skills, Testimonials, Contacts, Services } from '../../components'
import { headerData } from '../../data/headerData'
import FogWorkshop from '../../components/Blog/FogWorkshop.js';
import Head from '../Carousel/Carousel.js';
import Gallery from '../../components/Gallery/index.js';
import Gallery1 from '../../components/Gallery1/index.js';
import UpcomingProject from '../../components/UpcomingProject/UpcomingProject.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Payment from '../../components/Payment/Payment.js';
import WhatsApp from '../WhatsApp/WhatsApp.js';

function Main() {
    return (
        <div style={{backgroundColor: "black"}}>
<Navigation />
<WhatsApp />
            {/* <Container> */}
				<Row>
                    
                {/* <Navbar /> */}
            <Head />
            </Row>
			{/* </Container> */}
            {/* <Landing /> */}
            {/* </Animate> */}
            <About />
            <Services />
            <Featured />
            <Skills />
            <UpcomingProject />
            <Gallery1 />
            
            {/* <Experience /> */}
            
            {/* <Achievement /> */}
            
            <Testimonials />

            <FogWorkshop />
            <Payment />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
