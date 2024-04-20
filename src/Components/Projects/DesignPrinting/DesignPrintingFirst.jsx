import React from 'react';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import card1 from "../../../assets/Projects/3dprint/card1.png";
import card2 from "../../../assets/Projects/3dprint/card2.png";
import card3 from "../../../assets/Projects/3dprint/card3.png";
import card4 from "../../../assets/Projects/3dprint/card4.png";
import card5 from "../../../assets/Projects/3dprint/card5.png";
import card6 from "../../../assets/Projects/3dprint/card6.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "./DesignPrintingFirst.css";
const DesignPrintingFirst = () => {
    return (
      <>
        <section className="projectbg height">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <div className="sidebar dark_blur_bg">
                  <ul>
                    <li>
                      <Link to="/project">ROBOTICS AND AUTOMATION</Link>
                    </li>
                    <li>
                      <Link to="/diyprojects">DIY PROJECTS</Link>
                    </li>
                    <li>
                      <Link to="/softwaredev">SOFTWARE DEVELOPMENT</Link>
                    </li>
                    <li>
                      <Link to="/iot">IOT</Link>
                    </li>
                    <li>
                      <Link to="/webapp">WEB APP AND DESIGING</Link>
                    </li>
                    <li>
                      <Link to="/design">3D DESIGING AND PRINTING</Link>
                    </li>
                    <li>
                      <Link to="/project">OTHERS</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="d-flex">
                  <CardGroup className="robo">
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Customized 3D-Printed Jewelry</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card1} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Create a project focused on designing and 3D printing
                          personalized jewelry items.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>

                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Medical Models for Surgical Planning:</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card2} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Work on creating 3D-printed anatomical models for
                          medical professionals to aid in surgical planning and
                          education.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>3D-Printed Home Decor <hr /> </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card3} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Create a platform that offers a variety of 3D-printed
                          home decor items such as vases, lampshades, or
                          sculptures.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </div>
                <div className="card_grp2 mt-5">
                  <CardGroup className="robo">
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>3D-Printed Prosthetics </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card4} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Develop a project focused on designing and 3D printing
                          customized prosthetic limbs.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>

                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Customized 3D-Printed Footwear</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card5} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Create a platform that allows customers to design and
                          order personalized 3D-printed footwear.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Educational Kits for STEM Learning</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card6} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Develop a series of 3D-printed educational kits for
                          STEM (Science, Technology, Engineering, and
                          Mathematics) learning.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default DesignPrintingFirst;
