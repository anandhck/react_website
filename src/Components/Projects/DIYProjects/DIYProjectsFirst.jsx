import React from 'react';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import card1 from "../../../assets/Projects/DIY/card1.png";
import card2 from "../../../assets/Projects/DIY/card2.png";
import card3 from "../../../assets/Projects/DIY/card3.png";
import card4 from "../../../assets/Projects/DIY/card4.png";
import card5 from "../../../assets/Projects/DIY/card5.png";
import card6 from "../../../assets/Projects/DIY/card6.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
const DIYProjectsFirst = () => {
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
                      <Link to="/project">WEB APP AND DESIGING</Link>
                    </li>
                    <li>
                      <Link to="/project">3D DESIGING AND PRINTING</Link>
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
                        <h4>Arduino Weather Station:</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card1} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Create your own weather station using Arduino,
                          sensors, and a display to monitor real-time
                          temperature, humidity, and atmospheric pressure.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>

                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Raspberry Pi Retro Gaming Console:</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card2} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Transform a Raspberry Pi into a retro gaming console,
                          enabling you to play classic video games from the
                          comfort of your home.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Solar-Powered USB Charger:</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card3} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Construct a portable USB charger powered by solar
                          panels, providing a sustainable solution for charging
                          your devices on the go.
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
                        <h4>DIY Smart Mirror: </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card4} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Craft a futuristic smart mirror using a two-way
                          mirror, a Raspberry Pi, and custom software to display
                          real-time information like weather and calendar
                          updates.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>

                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Home Automation with Voice Control </h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card5} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Build a DIY home automation system integrating voice
                          control using platforms like Arduino and Raspberry Pi
                          to control lights, appliances, and more.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                        <Button variant="outline-info">READ MORE</Button>
                      </Card.Footer>
                    </Card>
                    <Card className="dark_blur_bg">
                      <div className="dark_blur_bg text-center">
                        <h4>Bluetooth Speaker System</h4>
                      </div>
                      <Card.Img variant="top" className="p-2" src={card6} />
                      <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                        <Card.Text>
                          Build a customized Bluetooth speaker with DIY speaker
                          components and Arduino, combining audio engineering
                          with electronics.
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

export default DIYProjectsFirst;
