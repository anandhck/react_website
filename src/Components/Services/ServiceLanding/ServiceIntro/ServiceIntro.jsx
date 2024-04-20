
import React from "react";
import "./ServiceIntro.css";
import slb from "../../../../assets/Services/slb2.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import serviceintro from "../../../../assets/Services/background.png";
const ServiceIntro = () => {
    return (
      <>
        <Parallax
          speed={-10}
          strength={100}
          bgImage={serviceintro}
          className="height"
        >
          <div className="slb">
            <Row>
              <Col
                md={8}
                className="d-flex justify-content-start align-items-center height"
              >
                <img src={slb} alt="" className="slimg" />
              </Col>
              <Col md={4} className="mf">
                <div className="options blur_bg">
                  <div className="d-flex justify-content-center align-items-center">
                    <h4>DO U HAVE A IDEA?</h4>
                  </div>
                  <div className="b_g">
                    <div className="d-flex b_g justify-content-center align-items-center">
                      <div className="btn_ys">
                        <Link to="/serviceform">
                          <Button variant="outline-success">yes</Button>{" "}
                        </Link>
                      </div>
                      <div className="btn_ys">
                        <Link to="/serviceclientno">
                          <Button variant="outline-danger">No</Button>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* second section */}
                <div className="got_it d-flex blur_bg p-2 justify-content-between">
                  <div>
                    <Link to="/serviceform">
                      <Button variant="success">Submit Idea</Button>
                    </Link>
                  </div>
                  <div>
                    <h2>We Can Build it together!</h2>
                  </div>
                </div>
                {/* second section end */}
              </Col>
            </Row>
          </div>
        </Parallax>
      </>
    );
}

export default ServiceIntro;
