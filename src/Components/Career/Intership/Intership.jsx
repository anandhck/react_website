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
import "./Intership.css";

const Intership = () => {
    return (
      <>
        <div className="height care_v_section">
          <Row id="vacancy_id">
            <h3 className="mt-5">INTERNSHIP</h3>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_1} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    BACK - END DEVELOPER
                  </Card.Title>
                  <Link to="/internshipform">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Launch your career in back-end development with Charmzz
                    Techs. Join as an intern to work on real projects, hone your
                    coding expertise, and contribute to cutting-edge solutions
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_1} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    FRONT - END DEVELOPER
                  </Card.Title>
                  <Link to="/internshipform">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Launch your career in back-end development with Charmzz
                    Techs. Join as an intern to work on real projects, hone your
                    coding expertise, and contribute to cutting-edge solutions
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_1} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    UI/UX DESIGNER
                  </Card.Title>
                  <Link to="/internshipform">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Launch your career in back-end development with Charmzz
                    Techs. Join as an intern to work on real projects, hone your
                    coding expertise, and contribute to cutting-edge solutions
                    {/* <br />
                    <br /> */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              {" "}
              {/* Each Col represents one card, md={6} means medium-sized columns */}
              <Card className="bg_blur">
                <Card.Img variant="top" src={v_card_1} alt="" />
                <Card.Body>
                  <Card.Title className="v_card_title">
                    ROBOTICS ENGINEER
                  </Card.Title>
                  <Link to="/internshipform">
                    <Button variant="light">Apply Now{"->"}</Button>{" "}
                  </Link>
                  <Card.Text className="v_card_text">
                    Launch your career in back-end development with Charmzz
                    Techs. Join as an intern to work on real projects, hone your
                    coding expertise, and contribute to cutting-edge solutions
                    {/* <br />
                    <br />  */}
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

export default Intership;
