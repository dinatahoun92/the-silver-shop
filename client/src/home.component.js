import React from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import cat1 from "./images/bracellets.jpg";
import cat2 from "./images/earings.jpg";
import cat3 from "./images/necklace.jpg";
import cat4 from "./images/rings.jpg";
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
      {/* start categories  */}
      <div className="categories">
        <Container fluid>
          <Row>
            <Col xs={12} sm={6} className="categoryCol">
              <div className="catContainer longCat">
                <img src={cat1} alt="" />
                <Button variant="info">Bracellets</Button>
              </div>
              <div className="catContainer">
                <img src={cat2} alt="" />
                <Button variant="info">Earings</Button>
              </div>
            </Col>
            <Col xs={12} sm={6} className="categoryCol">
              <div className="catContainer">
                <img src={cat3} alt="" />
                <Button variant="info">Chains</Button>
              </div>
              <div className="catContainer longCat">
                <img src={cat4} alt="" />
                <Button variant="info">Rings</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end categories */}
    </div>
  );
}
