import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./First_Section_Abt.css";
import Sectionfirst from "../../../assets/About/section_1.jpg";
import backgroundImg from "../../../assets/About/container_bg.jpg";
const FirstSection = () => {
  return (
    <>
      <div className="section_con">
        <Container>
          <Row className="align-items-center justify-content-end responsive_text">
            <Col sm={12} md={6} className="">
              <div className="img_style_3">
                {/* <img src={backgroundImg} alt="" className="responsive_text" /> */}
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="responsive_text blur_bg">
                <p>
                  At Charmzz Techs, innovation is our driving force. Founded on
                  the principles of pushing technological boundaries and
                  fostering creativity, we aim to revolutionize the digital
                  landscape. With our global presence spanning across India and
                  London, we blend diverse expertise, cultural insights, and
                  technical prowess to deliver cutting-edge solutions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FirstSection;
