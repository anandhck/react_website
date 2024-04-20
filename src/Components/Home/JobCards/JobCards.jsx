import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { Parallax } from "react-parallax";
import workshopimg from "../../../assets/para_img-2.jpeg";
import cardimg from "../../../assets/card_bg_img.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./JobCards.css";

const JobCards = () => {
  useEffect(() => {
    Aos.init({
      
    });
  },[])
    return (
      <>
        <Parallax strength={600} bgImage={cardimg} className="parallax_height">
          <CardGroup className="custume_margin" id='jobcard'>
            <Card
              data-aos="slide-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="blur_bg"
            >
              <Card.Body>
                <Card.Title className="text-center text-danger">
                  VACANCY
                </Card.Title>
                <Card.Text>
                  Unlock real-world experience with our dynamic internship
                  opportunities – Shape your future with hands-on learning
                </Card.Text>
                <Button variant="outline-info">EXPLORE NOW</Button>
              </Card.Body>
            </Card>
            <Card
              data-aos="slide-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              className="blur_bg"
            >
              <Card.Body>
                <Card.Title className="text-center text-danger">
                  INTERNSHIP
                </Card.Title>
                <Card.Text>
                  Unlock real-world experience with our dynamic internship
                  opportunities – Shape your future with hands-on learning
                </Card.Text>
                <Button variant="outline-info">EXPLORE NOW</Button>
              </Card.Body>
            </Card>
            <Card
              data-aos="slide-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="blur_bg"
            >
              <Card.Body>
                <Card.Title className="text-center text-danger">
                  WORKSHOP
                </Card.Title>
                <Card.Text>
                  Unlock real-world experience with our dynamic internship
                  opportunities – Shape your future with hands-on learning
                </Card.Text>
                <Button variant="outline-info">EXPLORE NOW</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Parallax>
      </>
    );
}

export default JobCards;
