import React from "react";
import Masonry from "react-masonry-css";
import { Carousel, Button } from "react-bootstrap";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import "./styles/home.scss";

export default function Home() {
  return (
    <div className="homePage">
      <Carousel controls={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="First slide" />
          <Carousel.Caption>
            <h3>New Collection!</h3>
            <p>
              Just for you <br /> collection
              <span className="maincolor"> 2020</span>
            </p>
            <Button variant="info">shop now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Third slide" />

          <Carousel.Caption>
            <h3>New Collection!</h3>
            <p>
              Just for you <br /> collection
              <span className="maincolor"> 2020</span>
            </p>
            <Button variant="info">shop now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="Third slide" />

          <Carousel.Caption>
            <h3>New Collection!</h3>
            <p>
              Just for you <br /> collection
              <span className="maincolor"> 2020</span>
            </p>
            <Button variant="info">shop now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      ></Masonry>
    </div>
  );
}
