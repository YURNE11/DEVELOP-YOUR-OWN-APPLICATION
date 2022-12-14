import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import game from'../img/game.jpeg';
import muerte from'../img/muerte.jpeg';
import lanterne from'../img/lanterne.jpeg';
import "./carousel.css"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d w-45"
          src={game}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d w-40"
          src={muerte}
          alt="Second slide"
          />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d w-40"
          src={lanterne}
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
  );
}
