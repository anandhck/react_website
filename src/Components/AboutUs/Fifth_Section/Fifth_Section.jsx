import React from 'react';
import { Parallax } from "react-parallax";
import { Container, Row, Col } from "react-bootstrap";
import Fivth_Section from "../../../assets/About/Fivth_Section.png";
import "./Fifth_Section.css";
const FifthSection = () => {
    return (
      <>
        <Parallax strength={100} bgImage={null} className="height">
          <Container
            fluid
            data-aos="zoom-out-left"
            data-aos-duration="2000"
            className="black_bg"
          >
            <Row className="align-items-center justify-content-center">
              <Col
                sm={6}
                md={6}
                data-aos="fade-right"
                data-aos-duration="2000"
                className="show_hover"
              >
                <div className="list_bg text-white text-center">
                  <h3>What we Do:</h3>
                  <h3>
                    At Charmzz Techs, we specialize in a spectrum of tech
                    services:
                  </h3>
                  <ol>
                    <li>
                      Research and Development: Our dedicated R&D team is
                      committed to exploring new technological horizons,
                      ensuring we stay ahead in an ever-evolving landscape.
                    </li>
                    <li>
                      Software Development: We craft scalable and innovative
                      software solutions tailored to meet the unique needs of
                      businesses.
                    </li>
                    <li>
                      Robotics and Automation: Leveraging cutting-edge robotics
                      and automation, we optimize processes and drive
                      efficiency.
                    </li>
                    <li>
                      Web Designing: Our creative web designers craft visually
                      stunning and user-friendly websites that leave a lasting
                      impression.
                    </li>
                    <li>
                      Web Application Development: We develop robust web
                      applications <br /> that empower businesses and elevate
                      user experiences.
                    </li>
                    <li>
                      Mobile App Development (iOS and Android): <br /> From
                      concept to launch, we build customized mobile apps that{" "}
                      <br /> resonate with your audience.
                    </li>
                  </ol>
                </div>
              </Col>
              <Col
                sm={6}
                md={6}
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="text-left"
              >
                <div className="Fourth_img_style">
                  <img src={Fivth_Section} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </Parallax>
      </>
    );
}

export default FifthSection;
