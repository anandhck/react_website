import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import card1 from "../../../../../assets/Services/mobile/card1.png";
import card2 from "../../../../../assets/Services/mobile/card2.png";
import card3 from "../../../../../assets/Services/mobile/card3.png";
import card4 from "../../../../../assets/Services/mobile/card3.png";
const ServiceMobileSctionSection = () => {
    return (
      <>
        <section className="sersoftbg height d-flex align-items-center">
          <div className="container">
            <h4 className="text-white">WHAT WE OFFER</h4>
            <CardGroup className="textb">
              <Card>
                <Card.Img variant="top" src={card1} />
                <Card.Body className="blur_bg cardorg">
                  <Card.Title>Custom Mobile App Development</Card.Title>
                  <Card.Text>
                    Tailored iOS and Android applications designed to meet your
                    unique business requirements, providing intuitive user
                    experiences and functionality.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={card3} />
                <Card.Body className="cardvio">
                  <Card.Title>Cross -Platform Compatibility</Card.Title>
                  <Card.Text>
                    Our mobile apps are developed to ensure seamless performance
                    across both iOS and Android devices, maximizing reach and
                    accessibility for your target audience.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={card4} />
                <Card.Body className="cardgreen">
                  <Card.Title>UI/UX Design Excellence</Card.Title>
                  <Card.Text>
                    Expertly crafted user interfaces and experiences that
                    prioritize usability, engagement, and brand consistency,
                    enhancing user satisfaction and retention.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={card2} />
                <Card.Body className="cardblue">
                  <Card.Title>Agile Development Methodology</Card.Title>
                  <Card.Text>
                    We follow agile development practices to deliver mobile apps
                    efficiently and adaptively, allowing for quick iterations,
                    feedback incorporation, and timely project completion
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </section>
      </>
    );
}

export default ServiceMobileSctionSection;
