import React from 'react';
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import Second_Section from "../../../assets/About/Second_Section.png"
import "./Second_Section_Abt.css"
const SecondSectionAbt = () => {
      useEffect(() => {
        Aos.init({});
      }, []);   
    return (
      <div>
        <Parallax strength={100} bgImage={null} className="height">
          <Container className="blur_bg">
            <Row className="align-items-center justify-content-center">
              <Col
                sm={12}
                md={6}
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="d-flex show_hover"
              >
                <div className="text-left abt_text">
                  <p className="">
                    {" "}
                    In the realm of innovation and <br /> technology, every
                    great journey begins with a visionary individual. Meet
                    Jaiwin Sam, a robotic engineer with a long-term vision to
                    transform ideas into reality. In 2017, he laid the
                    foundation for what would become the driving force behind
                    Charmzz Techs.
                  </p>
                  <p>
                    Starting modestly in Coimbatore, <br /> India, Charmzz Techs
                    embarked on a mission to empower aspiring minds and
                    individuals with the tools to turn their ideas into tangible
                    products. With a focus on student projects and individual
                    innovations, we set out to bridge the gap between
                    imagination and implementation.
                  </p>
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
                  <img src={Second_Section} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </Parallax>
      </div>
    );
}

export default SecondSectionAbt;
