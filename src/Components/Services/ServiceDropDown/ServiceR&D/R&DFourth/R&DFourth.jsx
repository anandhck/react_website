import React from 'react';
import "./R&DFourth.css";
import Card from "react-bootstrap/Card";
import hrobo from "../../../../../assets/Services/R&D/hrobo.png";
import crobo from "../../../../../assets/Services/R&D/crobo.png";
import brobo from "../../../../../assets/Services/R&D/brobo.png";
import grobo from "../../../../../assets/Services/R&D/grobo.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const RDFourth = () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <section className="rdcardbg height d-flex align-items-center">
          <div className="container">
            <div className="d-flex gap mt-5">
              <Card>
                <Card.Img variant="top" src={hrobo} />
                <div className="textbody dark_blur_bg">
                  <h3>Charmzz Robot:</h3>
                  <p>
                    Instantly notifies authorities and owners in emergencies,
                    enhancing safety and security with advanced detection
                    technology.
                  </p>
                </div>
              </Card>
              <Card>
                <Card.Img variant="top" src={crobo} />
                <div className="textbody dark_blur_bg">
                  <h3>Charmzz AI chatbot:</h3>
                  <p>
                    Successfully developed and deployed an AI-powered chatbot
                    for [Client Name], enhancing customer support and engagement
                    on their website.
                  </p>
                </div>
              </Card>
            </div>
            <div className="d-flex gap mt-5">
              <Card>
                <Card.Img variant="top" src={brobo} />
                <div className="textbody dark_blur_bg">
                  <h3>Blockchain Integration Solutions:</h3>
                  <p>
                    Implemented blockchain technology for [Client Name],
                    enabling secure and transparent transactions in their supply
                    chain management system.
                  </p>
                </div>
              </Card>
              <Card>
                <Card.Img variant="top" src={grobo} className="img-fluid" />
                <div className="textbody dark_blur_bg">
                  <h3> Augmented Reality (AR) Product Visualization:</h3>
                  <p>
                    Developed an AR product visualization tool for [Client
                    Name], allowing customers to virtually try out products
                    before making a purchase, resulting in increased sales and
                    customer satisfaction.
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
                        className='custume_modal'
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="d-flex justify-content-center">
                  <h4>WHAT WE DO</h4>
                </div>

                <div className="d-flex gap mt-5">
                  <Card>
                    <Card.Img variant="top" src={hrobo} />
                    <div className="textbody dark_blur_bg">
                      <h3>Charmzz Robot:</h3>
                      <p>
                        Instantly notifies authorities and owners in
                        emergencies, enhancing safety and security with advanced
                        detection technology.
                      </p>
                    </div>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={crobo} />
                    <div className="textbody dark_blur_bg">
                      <h3>Charmzz AI chatbot:</h3>
                      <p>
                        Successfully developed and deployed an AI-powered
                        chatbot for [Client Name], enhancing customer support
                        and engagement on their website.
                      </p>
                    </div>
                  </Card>
                </div>
                <div className="d-flex gap mt-5">
                  <Card>
                    <Card.Img variant="top" src={brobo} />
                    <div className="textbody dark_blur_bg">
                      <h3>Blockchain Integration Solutions:</h3>
                      <p>
                        Implemented blockchain technology for [Client Name],
                        enabling secure and transparent transactions in their
                        supply chain management system.
                      </p>
                    </div>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={grobo} className="img-fluid" />
                    <div className="textbody dark_blur_bg">
                      <h3> Augmented Reality (AR) Product Visualization:</h3>
                      <p>
                        Developed an AR product visualization tool for [Client
                        Name], allowing customers to virtually try out products
                        before making a purchase, resulting in increased sales
                        and customer satisfaction.
                      </p>
                    </div>
                  </Card>
                </div>
                <Card className="w-50">
                  <Card.Img variant="top" src={grobo} className="img-fluid" />
                  <div className="textbody dark_blur_bg">
                    <h3> Augmented Reality (AR) Product Visualization:</h3>
                    <p>
                      Developed an AR product visualization tool for [Client
                      Name], allowing customers to virtually try out products
                      before making a purchase, resulting in increased sales and
                      customer satisfaction.
                    </p>
                  </div>
                </Card>
              </Modal.Body>
            </Modal>
          </div>

          {/* model section end */}
        </section>
      </>
    );
}

export default RDFourth;
