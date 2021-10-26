import React, {Component} from 'react';
import './style.css';
import {
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faLink} from '@fortawesome/free-solid-svg-icons';
import { galleryData } from '../../data/galleryData'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 1000,
      isOpen: false,
      image:'',
    };
  }

  render() {
    const { photoIndex, isOpen, image } = this.state;
    
    return (
      <Row xl={12} className="main_row index ">

      {galleryData.map(item => ( 
        <Col xl={3}  key={item.id} className="card_col index">
        <Card className="card_main">
          <blockquote className="blockquote mb-0 card-body index">
            <h2>
            {item.name}
            </h2>
          </blockquote>
          <Card.Body>
          <FontAwesomeIcon onClick={() => this.setState({ isOpen: true, image:item.image })} className="icon" size="lg" icon={faImages} /> &nbsp;&nbsp;
          {
            item.link !== false  &&
              <Card.Link href={item.link} target="_blank"><FontAwesomeIcon className="icon" size="lg" icon={faLink}/></Card.Link>
          }
        </Card.Body>
        
        {isOpen && (
          <div className="index">
                <Lightbox
                  mainSrc={image[photoIndex]}
                  nextSrc={image[(photoIndex + 1) % image.length]}
                  prevSrc={image[(photoIndex + image.length - 1) % image.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + image.length - 1) % image.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % image.length,
                    })
                  }
                />
                </div>
              )}
              </Card>
        </Col>
      ))}
    </Row>
    );
  }
}
