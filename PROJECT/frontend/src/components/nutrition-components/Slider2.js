import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './slider.css';
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/nutrition-images/lunch1.jpg";
import img2 from "../../assets/images/nutrition-images/lunch2.jpg";
import img3 from "../../assets/images/nutrition-images/lunch3.jpg";
import img4 from "../../assets/images/nutrition-images/lunch4.jpg";

export default function Slider2() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img1} alt="Breakfast-img1" />
          <Carousel.Caption>
            <Button className="btn-slider" as={Link} to="/lunch">
              Create Food Diary 
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img2} alt="Breakfast-img2" />
          <Carousel.Caption>
            <Button className="btn-slider" as={Link} to="/lunch">
              Create Food Diary 
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img3} alt="Breakfast-img2" />
          <Carousel.Caption>
            <Button className="btn-slider" as={Link} to="/lunch">
              Create Food Diary 
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img4} alt="Breakfast-img2" />
          <Carousel.Caption>
            <Button className="btn-slider" as={Link} to="/lunch">
              Create Food Diary 
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
