import React from 'react';
import { Parallax } from "react-parallax";
import { Container, Row, Col } from "react-bootstrap";
import Fourth_Section from "../../../assets/About/Designer (1) 1.jpg";
import "./Fourth_Section.css";
const FourthSection = () => {
    return (
      <>
        <Parallax strength={100} bgImage={null} className="height p-5">
          {/* <Container className="white_bg"> */}
          <Row className="align-items-center justify-content-center white_bg">
            <Col
              sm={12}
              md={6}
              data-aos="zoom-out-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="text-left"
            >
              {/* <div className="Fourth_img_style"> */}
              <img src={Fourth_Section} alt="" className="img-fluid" />
              {/* </div> */}
            </Col>
            <Col
              sm={12}
              md={6}
              data-aos="zoom-out-left"
              data-aos-duration="2000"
              className="d-flex show_hover"
            >
              <div className="abt_text_lt">
                <p className="">
                  {" "}
                  As demand for our services soared, so too did our team. From a
                  humble beginning, our ranks swelled to include 53 talented
                  individuals spread across the globe. United by a shared
                  passion for innovation and a commitment to excellence, we
                  continue to push the boundaries of what's possible, one
                  project at a time.
                </p>
                <p className="">
                  Today, as we reflect on our journey, we are filled with
                  gratitude for the incredible individuals who have been part of
                  our story. But our journey is far from over. With each new
                  challenge and opportunity, we remain steadfast in our
                  commitment to innovation, collaboration, and pushing the
                  limits of technology.
                </p>
              </div>
            </Col>
          </Row>
          {/* </Container> */}
        </Parallax>
      </>
    );
}

export default FourthSection;
