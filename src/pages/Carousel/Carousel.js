import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

const Head = () => {
	const CarouselDiv = styled(Carousel)`
	`;
	const CarouselItemDiv = styled(Carousel.Item)`

	`;
  
	return (
		<CarouselDiv id="top" interval="2000" indicators="false">
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src="./mainpage.jpg"
          alt="First slide"
          fluid="true"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
				</Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src="./mainpage.jpg"
					alt="Second slide"
          fluid="true"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
				</Carousel.Caption>
			</CarouselItemDiv>
			<CarouselItemDiv>
				<img
					className="d-block w-100"
					src="./mainpage.jpg"
					alt="Third slide"
          fluid="true"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption>
			</CarouselItemDiv>
		</CarouselDiv>
	);
};

export default Head;
