import React from 'react';
import "./ServiceSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Button from "react-bootstrap/Button";
import cardimg from "../../../assets/robo_png.png";




const ServiceSection = () => {
    return (
      <>
        <Parallax strength={600} bgImage={null} className="parallax_height">
          <Container>
            <div className="blur_bg service_section">
              <Row className="align-items-center justify-content-center">
                <Col
                  sm={12}
                  md={6}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="text-center"
                >
                  <div className="text-white">
                    <h3>Our Comprehensive Services</h3>
                    <p>
                      At Charmzz Techs, we excel in providing a spectrum of
                      tech-driven solutions that redefine industries.
                    </p>
                    <p>
                      From innovative R&D initiatives and comprehensive software
                      development to pioneering robotics and automation, our
                      services are tailored to elevate businesses.
                    </p>
                    <p>
                      Our expertise extends to crafting engaging web designs,
                      intuitive web applications, and seamless mobile apps for
                      iOS and Android.
                    </p>
                    <p>
                      Additionally, we specialize in IoT solutions and
                      cutting-edge 3D design and printing, delivering excellence
                      in every project.
                    </p>
                    <Button variant="outline-success">Explore More</Button>{" "}
                  </div>
                </Col>
                <Col
                  sm={12}
                  md={6}
                  data-aos="slide-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                  className="text-left"
                >
                  <div className="img_style">
                    <img src={cardimg} alt="" className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Parallax>
      </>
    );
}

export default ServiceSection;
