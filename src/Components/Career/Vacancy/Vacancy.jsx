import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import v_card_1 from "../../../assets/Career/Vacancy/v_card_1.png";
import v_card_2 from "../../../assets/Career/Vacancy/v_card_2.png";
import v_card_3 from "../../../assets/Career/Vacancy/v_card_3.png";
import v_card_4 from "../../../assets/Career/Vacancy/v_card_4.png";
import { Link } from "react-router-dom";
import "./Vacancy.css";
const Vacancy = () => {
    return (
      <>
        <div className="height care_v_section">
          <Row id="vacancy_id">
            <h3 className="mt-5">VACANCY</h3>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_1} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    BACK - END DEVELOPER
                  </Card.Title>
                  <Link to="/vacancynapply">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Elevate your career as a Back-End Developer, architecting
                    robust and scalable server-side solutions that power
                    cutting-edge web applications
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_2} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    FRONT - END DEVELOPER
                  </Card.Title>
                  <Link to="/vacancyfrontend">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Join our dynamic team as a Front-End Developer, shaping
                    captivating user experiences through innovative web designs
                    and seamless user interfaces
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_3} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    UI/UX DESIGNER
                  </Card.Title>
                  <Link to="/vacancyuiux">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Elevate digital experiences as a UI/UX Designer at Charmzz
                    Techs, blending creativity and functionality for visually
                    stunning user interfaces
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_4} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    ROBOTICS ENGINEER
                  </Card.Title>
                  <Link to="/vacancyrobotics">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Join Charmzz Techs as a Robotics Engineer, crafting
                    innovative solutions at the intersection of technology and
                    automation
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more Col components as needed */}
          </Row>
        </div>
      </>
    );
}

export default Vacancy;
