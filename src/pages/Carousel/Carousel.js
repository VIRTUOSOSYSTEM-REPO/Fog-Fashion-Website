import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../../assets/img/header/head8.jpg"
import Img1 from "../../assets/img/header/head.jpg"
import Img2 from "../../assets/img/header/head1.jpg"
import Img3 from "../../assets/img/header/head2.jpg"
import Img4 from "../../assets/img/header/head3.jpg"
import Img5 from "../../assets/img/header/head4.jpg"
import Img6 from "../../assets/img/header/head5.jpg"
import Img7 from "../../assets/img/header/head6.jpg"
import Img8 from "../../assets/img/header/head7.jpg"


const Head = () => {
	const CarouselDiv = styled(Carousel)`
	`;
	const CarouselItemDiv = styled(Carousel.Item)`

	`;
  
	return (
		<div className="index">
		<CarouselDiv id="top" interval="2000" indicators="false">
			<CarouselItemDiv>
				<img
					className="d-block w-100 index"
					src={Img1}
          alt="First slide"
          fluid="true"
				/>
				<Carousel.Caption>
					{/* <h3>First slide label</h3>/ */}
				</Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img2}
					alt="Second slide"
          fluid="true"
				/>

				<Carousel.Caption>
					{/* <h3>Second slide label</h3> */}
				</Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img3}
					alt="Third slide"
          fluid="true"
				/>

				<Carousel.Caption>
					{/* <h3>Third slide label</h3> */}
				</Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img4}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
				<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img5}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
				<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img6}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
				<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img7}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
				<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img8}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
				<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
		</CarouselDiv>
		</div>
	);
};

export default Head;
