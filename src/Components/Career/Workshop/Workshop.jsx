import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import workshopcard1 from "../../../assets/Career/Workshop/l_half_1.png";
import workshopL_half_2 from "../../../assets/Career/Workshop/l_half_2.png";
import workshopcard2 from "../../../assets/Career/Workshop/image 78.png";
import workshophalf2 from "../../../assets/Career/Workshop/half_2.png";
import date from "../../../assets/Career/Workshop/dateicon.png";
import time from "../../../assets/Career/Workshop/timeicon.png";
import map from "../../../assets/Career/Workshop/mapicon.png";
import { Link } from "react-router-dom";
import "./Workshop.css";

const Workshop = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
console.log("formattedDate", formattedDate, formattedTime, currentDateTime);
    return (
      <>
        <div className="height care_w_section">
          {/* <div className="container"> */}
          <Row id="workshop_id">
            <h3 className="mt-5">WORKSHOP</h3>
            <Col md={6} className="mb-4">
              <div className="container w_bg_color p-4">
                {" "}
                {/* Each Col represents one card, md={6} means medium-sized columns */}
                <Card className="bg_blur">
                  <div className="d-flex box_shadow">
                    <Card.Img variant="top" src={workshopL_half_2} alt="" />
                    <Card.Img variant="top" src={workshophalf2} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className="w_card_title mt-2 d-flex justify-content-between">
                      <p>Robotics Hands-on Workshop</p>
                      <Link to="/workshopapply">
                        <Button variant="light">Rigister Now{"->"}</Button>{" "}
                      </Link>
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer
                    className="d-flex justify-content-between"
                    id="w_card_id"
                  >
                    <div className="d-flex">
                      <span>
                        <img src={date} alt="" />
                      </span>
                      <p>{formattedDate}</p>
                    </div>
                    <div className="d-flex">
                      <span>
                        <img src={time} alt="" />
                      </span>
                      <p>{formattedTime}</p>
                    </div>
                    <div className="d-flex">
                      <span>
                        <img src={map} alt="" />
                      </span>
                      <p>VIRTUAL</p>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="container w_bg_color p-4">
                {" "}
                {/* Each Col represents one card, md={6} means medium-sized columns */}
                <Card className="bg_blur">
                  <div className="d-flex box_shadow">
                    <Card.Img variant="top" src={workshopcard2} alt="" />
                    <Card.Img variant="top" src={workshophalf2} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className="w_card_title mt-2 d-flex justify-content-between">
                      <p>Robotics and Automation Workshop</p>
                      <Button variant="light">Register Now{"->"}</Button>{" "}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer
                    className="d-flex justify-content-between"
                    id="w_card_id"
                  >
                    <div className="d-flex">
                      <span>
                        <img src={date} alt="" />
                      </span>
                      <p>{formattedDate}</p>
                    </div>
                    <div className="d-flex">
                      <span>
                        <img src={time} alt="" />
                      </span>
                      <p>{formattedTime}</p>
                    </div>
                    <div className="d-flex">
                      <span>
                        <img src={map} alt="" />
                      </span>
                      <p>VIRTUAL</p>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            </Col>
            {/* Add more Col components as needed */}
          </Row>
          {/* </div> */}
        </div>
      </>
    );
}

export default Workshop;
