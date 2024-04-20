import React, { useRef } from "react";
import { useEffect} from "react";
import { Parallax } from 'react-parallax';
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CardAnimation.css";
import robolens from "../../../assets/robo_lens.png"


const CardAnimation = () => {
  useEffect(() => {
    Aos.init({});
  }, []);   
    return (
      <>
        <Parallax strength={100} bgImage={null} className="height">
          <Container>
            <Row className="align-items-center justify-content-center blur_bg">
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
                  <img src={robolens} alt="" className="img-fluid" />
                </div>
              </Col>
              <Col
                sm={12}
                md={6}
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="text-center d-flex show_hover"
              >
                <div className="txt_hover">
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
                    intuitive web applications, and seamless mobile apps for iOS
                    and Android.
                  </p>
                  <p>
                    Additionally, we specialize in IoT solutions and
                    cutting-edge 3D design and printing, delivering excellence
                    in every project.
                  </p>
                  <Button variant="outline-success">Explore More</Button>{" "}
                </div>
                <div
                  className="sub_title blur_bg"
                  id="text_content"
                >
                  <ul>
                    <li>ROBOTICS AND AUTOMATION</li>
                    <li>DIY PROJECTS</li>
                    <li>SOFTWERE DEVELOPMENT</li>
                    <li>INTERNET OF THINGS</li>
                    <li>WEBAPP AND DESIGINS</li>
                    <li>3D DESIGING AND PRINTING</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </Parallax>
      </>
    );
}

export default CardAnimation;
