import React from 'react';
import "./RoboticsFirst.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import card1 from "../../../../assets/Projects/card1.png";
import card2 from "../../../../assets/Projects/card2.png";
import card3 from "../../../../assets/Projects/card3.png";
import card4 from "../../../../assets/Projects/card4.png";
import card5 from "../../../../assets/Projects/card5.png";
import card6 from "../../../../assets/Projects/card6.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
const RoboticsFirst = () => {
    return (
      <>
        <section className="projectbg height">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <div className="sidebar dark_blur_bg d-flex justify-content-center flex-column align-items-center">
                  <Link to="/uploadprojects">
                    <Button variant="outline-info" className="mt-3">
                      Upload Projects
                    </Button>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/roboticsprojects">
                        ROBOTICS AND AUTOMATION
                      </Link>
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
                        <h4>Smart Home Automation System</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card1} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Transform your home into an intelligent space with our
                          Smart Home Automation System.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>

                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Gesture controlled Robotic Arm </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card2} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Experience the future of human-machine interaction as
                          you control a robotic arm's movements with intuitive
                          hand gestures.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Gesture controlled Robotic Arm </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card3} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Build a versatile Line-Following Robot that navigates
                          predefined paths
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
                        <h4>Automated Plant Watering Robot: </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card4} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Ensure your plants thrive with a robot designed to
                          detect soil moisture levels and autonomously water
                          plants as needed.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>

                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Automated Plant Watering Robot: </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card5} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Boost efficiency with a robotic system that uses
                          sensors to identify and sort objects on a conveyor
                          belt based on predefined criteria.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Warehouse Inventory Drone </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card6} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Revolutionize inventory management with a drone
                          equipped with computer vision, automating stock
                          counting and management in large warehouses.
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

export default RoboticsFirst;
