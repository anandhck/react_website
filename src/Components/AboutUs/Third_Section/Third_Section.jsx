import React from 'react';
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import Third_Section from "../../../assets/About/Third_Section.png";
import "./Third_Section.css";

const ThirdSection = () => {
    return (
      <>
        <Parallax strength={100} bgImage={null} className="height">
          <Container className="blur_bg">
            <Row className="align-items-center justify-content-center">
              <Col
                sm={12}
                md={6}
                data-aos="zoom-in-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="text-left"
              >
                <div className="img_style">
                  <img src={Third_Section} alt="" className="img-fluid" />
                </div>
              </Col>
              <Col
                sm={12}
                md={6}
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                className="d-flex show_hover"
              >
                <div className="abt_text">
                  <p className="">
                    {" "}
                    In 2023, we took a monumentalstep forward by officially
                    registering as a private limited company in London, United
                    Kingdom. This marked a significant milestone in our journey,
                    paving the way for even greater opportunities and
                    collaborations on a global scale.
                  </p>
                  <p className="">
                    With our newfound status,we embarked on our first major
                    project in robotics. From design to development and
                    deployment, our team demonstrated unparalleled dedication
                    and expertise, delivering exceptional results that exceeded
                    expectations. This success catapulted us into the spotlight,
                    earning the trust and admiration of clients around the
                    world.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Parallax>
      </>
    );
}

export default ThirdSection;
