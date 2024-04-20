import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Button from "react-bootstrap/Button";
import "./SocialLinks.css"

const SocialLinks = () => {
    return (
      <>
        <Parallax strength={600} bgImage={null}>
          <Container>
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              className="custume_height"
            >
              <div className="d-flex justify-content-around">
                <p className="font_size  mt-4">
                  "Connect with us - Your inquiries spark our smiles!"
                </p>
                <div>
                  <Button className="mt-4" variant="success">
                    CONTACT US
                  </Button>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center icon_gap">
                <Row className="icon_gap">
                  <Col Col>
                    <div
                      class="icon insta_icon"
                    >
                      <i class="fab fa-instagram fa-1x" />
                    </div>
                  </Col>
                  <Col Col>
                    <div
                     
                      class="icon facebook_icon"
                    >
                      <i class="fab fa-facebook fa-1x" />
                    </div>
                  </Col>
                  <Col Col>
                    <div
                   
                      class="icon whatsapp_icon"
                    >
                      <i class="fab fa-whatsapp fa-1x" />
                    </div>
                  </Col>
                  <Col Col>
                    <div
                     
                      class="icon telegram_icon"
                    >
                      <i class="fab fa-telegram fa-1x" />
                    </div>
                  </Col>
                  <Col Col>
                    <div
                   
                      class="icon gmail_icon"
                    >
                      <i class="fab fa-telegram fa-1x" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            
          </Container>
        </Parallax>
      </>
    );
}

export default SocialLinks;
