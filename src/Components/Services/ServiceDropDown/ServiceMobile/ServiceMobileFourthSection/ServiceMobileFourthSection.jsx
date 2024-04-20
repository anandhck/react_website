import React from 'react';
import Card from "react-bootstrap/Card";
import cardm1 from "../../../../../assets/Services/mobile/m1.png";
import cardm2 from "../../../../../assets/Services/mobile/m2.png";
import cardm3 from "../../../../../assets/Services/mobile/m3.png";
import cardm4 from "../../../../../assets/Services/mobile/m4.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const ServiceMobileFourthSection = () => {
       const [show, setShow] = useState(false);
    return (
      <>
        <section className="rdcardbg height d-flex align-items-center">
          <div className="container">
            <div className="d-flex gap mt-5">
              <Card>
                <Card.Img variant="top" src={cardm1} />
                <div className="textbody dark_blur_bg">
                  <h3>Cirheal studio website: </h3>
                  <p>
                    The website gives the portfolio of a mandala workshops and
                    their works for sale.
                  </p>
                </div>
              </Card>
              <Card>
                <Card.Img variant="top" src={cardm2} />
                <div className="textbody dark_blur_bg">
                  <h3>Santhi Social trust: </h3>
                  <p>
                    The portfolio of a trust gives the overview of their whole
                    work and services.
                  </p>
                </div>
              </Card>
            </div>
            <div className="d-flex gap mt-5">
              <Card>
                <Card.Img variant="top" src={cardm3} />
                <div className="textbody dark_blur_bg">
                  <h3> Event Planning Platform: </h3>
                  <p>
                    Design a web application for event planning, allowing users
                    to create, manage, and RSVP to events.
                  </p>
                </div>
              </Card>
              <Card className="w-70">
                <Card.Img variant="top" src={cardm4} className="img-fluid" />
                <div className="textbody dark_blur_bg">
                  <h3> Collaborative Document Editing Platform:</h3>
                  <p>
                    Design an interface that promotes collaboration and provides
                    a seamless editing experience for users.
                  </p>
                </div>
              </Card>
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="danger" onClick={() => setShow(true)}>
                SHOW MORE
              </Button>{" "}
            </div>
          </div>
          {/* model section */}
          <div className="modalcen d-flex justify-content-center align-item-center">
            <Modal
              show={show}
              onHide={() => setShow(false)}
              aria-labelledby="custom-modal"
              className="custume_modal"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="d-flex justify-content-center">
                  <h4>WHAT WE DO</h4>
                </div>

                <div className="d-flex gap mt-5">
                  <Card>
                    <Card.Img variant="top" src={cardm1} />
                    <div className="textbody dark_blur_bg">
                      <h3>Cirheal studio website: </h3>
                      <p>
                        The website gives the portfolio of a mandala workshops
                        and their works for sale.
                      </p>
                    </div>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={cardm2} />
                    <div className="textbody dark_blur_bg">
                      <h3>Santhi Social trust: </h3>
                      <p>
                        The portfolio of a trust gives the overview of their
                        whole work and services.
                      </p>
                    </div>
                  </Card>
                </div>
                <div className="d-flex gap mt-5">
                  <Card>
                    <Card.Img variant="top" src={cardm3} />
                    <div className="textbody dark_blur_bg">
                      <h3> Event Planning Platform: </h3>
                      <p>
                        Design a web application for event planning, allowing
                        users to create, manage, and RSVP to events.
                      </p>
                    </div>
                  </Card>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={cardm4}
                      className="img-fluid"
                    />
                    <div className="textbody dark_blur_bg">
                      <h3> Collaborative Document Editing Platform:</h3>
                      <p>
                        Design an interface that promotes collaboration and
                        provides a seamless editing experience for users.
                      </p>
                    </div>
                  </Card>
                </div>
              </Modal.Body>
            </Modal>
          </div>

          {/* model section end */}
        </section>
      </>
    );
}

export default ServiceMobileFourthSection;
