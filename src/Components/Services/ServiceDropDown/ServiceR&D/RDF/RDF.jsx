import React from 'react';
import "./RDF.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Carousel } from "react-bootstrap";
import clientone from "../../../../../assets/Services/R&D/cliento.png";
import client2 from "../../../../../assets/Services/R&D/clientt.png";
import client3 from "../../../../../assets/Services/R&D/client3.png";

const RDF = () => {
    return (
      <>
        <section className="height d-flex align-items-center">
          <div className="container">
            <h3>See what our clients said about us! </h3>
            {/* <CardGroup className="textb">
              <Card>
                <Card.Img variant="top" src={bearimg} />
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
                <Card.Img variant="top" src={setting} />
                <Card.Body className="cardblue">
                  <Card.Title>Technical Prototyping</Card.Title>
                  <Card.Text>
                    Our team turns ideas into reality through meticulous
                    prototyping, validating concepts and ensuring feasibility
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={teles} />
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
                <Card.Img variant="top" src={robo} />
                <Card.Body className="cardorg">
                  <Card.Title>Solution Development</Card.Title>
                  <Card.Text>
                    Crafting solutions that go beyond expectations, leveraging
                    the latest technologies and methodologies to create
                    impactful innovations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup> */}
            <Carousel className="client" controls={false}>
              <Carousel.Item>
                <div className="d-flex card_g">
                  <Card className="p-3 card_1">
                    <Card.Img variant="top" src={clientone} />
                    <Card.Body className="">
                      <Card.Title>
                        - John Doe, CEO of XYZ Enterprises
                      </Card.Title>
                      <Card.Text className="text-center">
                        “Charmzz Techs' R&D team took our idea from concept to
                        reality with remarkable efficiency and precision. Their
                        innovative approach and attention to detail exceeded our
                        expectations. Highly recommended!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="p-3 card_2">
                    <Card.Img variant="top" src={client2} />
                    <Card.Body className="">
                      <Card.Title>
                        - Sarah Brown, Founder of TechGenius Startup
                      </Card.Title>
                      <Card.Text className="text-center">
                        "We turned to Charmzz Techs for R&D support, and they
                        delivered beyond our expectations. Their team's
                        creativity, professionalism, and dedication to solving
                        problems were evident throughout the project. We're
                        excited to continue working with them on future
                        initiatives."
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="p-3 card_3">
                    <Card.Img variant="top" src={client3} />
                    <Card.Body className="">
                      <Card.Title>
                        {" "}
                        - Jane Smith, CTO of ABC Innovations
                      </Card.Title>
                      <Card.Text className="text-center">
                        "Working with Charmzz Techs on our R&D project was a
                        game-changer for our company. Their team's expertise and
                        commitment to delivering cutting-edge solutions helped
                        us stay ahead of the competition. We're thrilled with
                        the results!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Item className="d-flex card_g">
                  <Card className="p-3 card_4">
                    <Card.Img variant="top" src={clientone} />
                    <Card.Body className="">
                      <Card.Title>
                        - John Doe, CEO of XYZ Enterprises
                      </Card.Title>
                      <Card.Text className="text-center">
                        “Charmzz Techs' R&D team took our idea from concept to
                        reality with remarkable efficiency and precision. Their
                        innovative approach and attention to detail exceeded our
                        expectations. Highly recommended!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="p-3 card_5">
                    <Card.Img variant="top" src={clientone} />
                    <Card.Body className="">
                      <Card.Title>
                        - Sarah Brown, Founder of TechGenius Startup
                      </Card.Title>
                      <Card.Text className="text-center">
                        "We turned to Charmzz Techs for R&D support, and they
                        delivered beyond our expectations. Their team's
                        creativity, professionalism, and dedication to solving
                        problems were evident throughout the project. We're
                        excited to continue working with them on future
                        initiatives."
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="p-3 card_6">
                    <Card.Img variant="top" src={clientone} />
                    <Card.Body className="">
                      <Card.Title>
                        {" "}
                        - Jane Smith, CTO of ABC Innovations
                      </Card.Title>
                      <Card.Text className="text-center">
                        "Working with Charmzz Techs on our R&D project was a
                        game-changer for our company. Their team's expertise and
                        commitment to delivering cutting-edge solutions helped
                        us stay ahead of the competition. We're thrilled with
                        the results!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      </>
    );
}

export default RDF;
