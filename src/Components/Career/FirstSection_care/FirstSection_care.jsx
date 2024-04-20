import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import card1 from "../../../assets/Career/card_1.png";
import card2 from "../../../assets/Career/Landing.png";
import card3 from "../../../assets/Career/card_3.png";
import Vacancy from '../Vacancy/Vacancy';
import Intership from "../Intership/Intership";
import Workshop from "../Workshop/Workshop";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topics from "../Topics/Topics";
import "./FirstSection_care.css";
const FirstSectionCare = () => {
  const internRef = useRef(null); 
  const vacancyRef = useRef(null); 
  const workshopRef = useRef(null); 
  
  const vacancyButtonClick = () => {
    // Scroll to the vacancy_section when the button is clicked
    vacancyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const internButtonClick = () => {
    // Scroll to the vacancy_section when the button is clicked
    internRef.current.scrollIntoView({ behavior: "smooth" });
  };
   const workshopButtonClick = () => {
     // Scroll to the vacancy_section when the button is clicked
     workshopRef.current.scrollIntoView({ behavior: "smooth" });
   };
    return (
      <>
        <div className="container" id="banner">
          <div className="height d-flex justify-content-center align-center flex-column">
            <div className="Career text-center mt-3">
              <h1>Elevate your career with Charmzz Techs </h1>
              <p>
                Unlock your potential and shape the future with a rewarding
                career at Charmzz Techs, where innovation meets opportunity
              </p>
            </div>

            <div className="card_section_care d-flex justify-content-around">
              {" "}
              <Row>
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-end"
                >
                  <Card id="lg_card">
                    <Card.Img variant="top" src={card1} />
                    <div className="P_care">
                      <Button variant="light" onClick={vacancyButtonClick}>
                        Vacancy
                      </Button>{" "}
                    </div>
                  </Card>
                </Col>
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-end"
                >
                  <Card className="xl_card">
                    <Card.Img variant="top" src={card2} />
                    <div className="P_care">
                      <Button variant="light" onClick={internButtonClick}>
                        Apply for Internship
                      </Button>{" "}
                    </div>
                  </Card>
                </Col>
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-end"
                >
                  <Card id="lg_card">
                    <Card.Img variant="top" src={card3} />
                    <div className="P_care">
                      <Button variant="light" onClick={workshopButtonClick}>
                        Workshops
                      </Button>{" "}
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <div ref={vacancyRef} className="vacancy_section">
            <Vacancy />
          </div>
          <div ref={internRef} className="intern_section">
            <Intership />
          </div>
          <div ref={workshopRef} className="workshop_section">
            <Workshop />
          </div>
          <div className="topics_section">
            <Topics />
          </div>
        </div>
      </>
    );
}

export default FirstSectionCare;
