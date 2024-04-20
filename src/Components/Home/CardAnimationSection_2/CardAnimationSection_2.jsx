import React, { useRef } from "react";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import Button from "react-bootstrap/Button";
import {Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CardAnimationSection_2.css";
import cara_img_1 from "../../../assets/cara_img_1.png";
import cara_img_2 from "../../../assets/cara_img_2.png";
import cara_img_3 from "../../../assets/cara_img_3.png";
import cara_img_4 from "../../../assets/cara_img_4.png";
import cara_img_5 from "../../../assets/cara_img_5.png";
const CardAnimation2 = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Parallax strength={100} bgImage={null}>
        <Carousel data-bs-theme="light" controls={false} className="min_height">
          <Carousel.Item>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="w-100 text-white"
            >
              <div className="bg_box">
                <Row className="align-items-center justify-content-end blur_bg">
                  <Col
                    sm={12}
                    md={6}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className="text-end show_hover_2"
                  >
                    <div className="txt_hover">
                      <p>ROBOTICS AND AUTOMATION</p>
                      <p>
                        Explore the future with our Robotics and Automation
                        projects,
                      </p>
                      <p> where innovation meets precision,</p>
                      <p>
                        {" "}
                        ushering in a new era of intelligent and automated
                        solutions
                      </p>
                      <Button variant="outline-success">
                        Explore More
                      </Button>{" "}
                    </div>
                  </Col>
                  <Col
                    sm={12}
                    md={6}
                    data-aos="slide-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className="text-left"
                  >
                    <div className="img_style_2">
                      <img src={cara_img_1} alt="" className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-100 d-flex justify-content-center align-items-center text-white">
              <div className="bg_box">
                <Row className="align-items-center justify-content-end blur_bg">
                  <Col sm={12} md={6} className="text-left">
                    <div className="img_style_2">
                      <img src={cara_img_2} alt="" className="img-fluid" />
                    </div>
                  </Col>
                  <Col sm={12} md={6} className="text-start show_hover_2">
                    <div className="txt_hover">
                      <p>DIY PROJECTS</p>
                      <p>
                        Embark on creative endeavors with our DIY projects,
                        <br />
                        empowering you to transform ideas into reality through
                        hands-on exploration and personal innovation
                      </p>
                      <Button variant="outline-success">
                        Explore More
                      </Button>{" "}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-100 d-flex justify-content-center align-items-center text-white">
              <div className="bg_box">
                <Row className="align-items-center justify-content-end blur_bg">
                  <Col sm={12} md={6} className="text-end show_hover_2">
                    <div className="txt_hover">
                      <p>IOT PROJECTS</p>
                      <p>
                        Experience the power of connected intelligence with our
                        IoT projects, <br /> where innovative solutions
                        seamlessly integrate the physical and <br /> digital
                        worlds for enhanced experiences
                      </p>
                      <Button variant="outline-success">Explore More</Button>{" "}
                    </div>
                  </Col>
                  <Col sm={12} md={6} className="text-left">
                    <div className="img_style_2">
                      <img src={cara_img_3} alt="" className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-100 d-flex justify-content-center align-items-center text-white">
              <div className="bg_box">
                <Row className="align-items-center justify-content-end blur_bg">
                  <Col sm={12} md={6} className="text-left">
                    <div className="img_style_2">
                      <img src={cara_img_4} alt="" className="img-fluid" />
                    </div>
                  </Col>
                  <Col sm={12} md={6} className="text-start show_hover_2">
                    <div className="txt_hover">
                      <p>3D DESIGING AND PRINTING</p>
                      <p>
                        Unleash creativity in three dimensions with our 3D
                        Designing and Printing projects, <br /> where ideas come
                        to life through innovative design and advanced printing
                        technologies
                      </p>
                      <Button variant="outline-success">Explore More</Button>{" "}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-100  text-white">
              <div className="bg_box">
                <Row className="align-items-center justify-content-end blur_bg">
                  <Col sm={12} md={6} className="text-end show_hover_2">
                    <div className="txt_hover">
                      <p>SOFTWARE DEVELOPMENT</p>
                      <p>
                        Dive into the world of software development with our
                        projects, <br /> where code becomes creativity, and
                        innovation <br />
                        drives transformative digital solutions
                      </p>
                      <Button variant="outline-success">
                        Explore More
                      </Button>{" "}
                    </div>
                  </Col>
                  <Col sm={12} md={6} className="text-left">
                    <div className="img_style_2">
                      <img src={cara_img_5} alt="" className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Parallax>
    </>
  );
};

export default CardAnimation2;
