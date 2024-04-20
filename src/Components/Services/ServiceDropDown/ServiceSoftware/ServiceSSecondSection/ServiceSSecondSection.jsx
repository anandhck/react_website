import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import card1 from "../../../../../assets/Services/Software/card1.png";
import card2 from "../../../../../assets/Services/Software/card2.png";
import card3 from "../../../../../assets/Services/Software/card1.png";
import card4 from "../../../../../assets/Services/Software/card1.png";
import "./ServiceSSecondSection.css"
const ServiceSSecondSection = () => {
    return (
      <>
        <section className="sersoftbg height d-flex align-items-center">
          <div className="container">
            <h4 className="text-white">WHAT WE OFFER</h4>
            <CardGroup className="textb">
              <Card>
                <Card.Img variant="top" src={card1} />
                <Card.Body className="blur_bg cardorg">
                  <Card.Title>Innovative Ideation</Card.Title>
                  <Card.Text>
                    From concept to execution, we incubate groundbreaking ideas,
                    exploring uncharted territories to craft unique and viable
                    solutions.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={card3} />
                <Card.Body className="cardvio">
                  <Card.Title>Exploratory Studies</Card.Title>
                  <Card.Text>
                    We conduct extensive studies, diving deep into technology
                    landscapes, market trends, and user behaviors to inform our
                    developments.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={card4} />
                <Card.Body className="cardgreen">
                  <Card.Title>Solution Development</Card.Title>
                  <Card.Text>
                    Crafting solutions that go beyond expectations, leveraging
                    the latest technologies and methodologies to create
                    impactful innovations.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={card2} />
                <Card.Body className="cardblue">
                  <Card.Title>Technical Prototyping</Card.Title>
                  <Card.Text>
                    Our team turns ideas into reality through meticulous
                    prototyping, validating concepts and ensuring feasibility
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </section>
      </>
    );
}

export default ServiceSSecondSection;
