import React from 'react';
import { Carousel} from 'react-bootstrap';
import Image1 from '../../assets/1858.jpg';
import Image2 from '../../assets/1859.jpg';
import Image3 from '../../assets/1860.jpg';

const HeroSection = () => {
    return (
    <div>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    );
};
export default HeroSection;