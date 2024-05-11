import React, { useEffect, useState } from 'react';
import "./RoboticsFirst.css";
import Card from "react-bootstrap/Card";
import card1 from "../../../../assets/Projects/card1.png";
import card2 from "../../../../assets/Projects/card2.png";
import card3 from "../../../../assets/Projects/card3.png";
import card4 from "../../../../assets/Projects/card4.png";
import card5 from "../../../../assets/Projects/card5.png";
import card6 from "../../../../assets/Projects/card6.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Category from '../../Category/Category';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from '../../ProjectCard/ProjectCard';

const RoboticsFirst = () => {
  
  const [data, setData] = useState([]);
  console.log("Data:", data);
  useEffect(() => {
    loadBlogsData();
  }, [])
  
  const loadBlogsData = async () => {    
    try {
      const res = await axios.get("http://localhost:8000/api/posts");
      if (res.status === 200) {
        console.log("data check", res.data);
      setData(res.data); 
      } else {
      toast.error("Something went wrong")
      }    
    } catch(err) {
    toast(err)
    } 
   
  }
  console.log("dta", data)
    
  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + "...";
    }
    return str;
  }
  
    return (
      <>
        <section className="projectbg height">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <Category />
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
                  <CardGroup className="mt-2 pcard flex-column align-items-center">
                    <div className="title">
                      <h4 className="text-white">Uploaded Projects</h4>
                    </div>
                    <div className="row">
                      {data &&
                        data.map(
                          (item, index) =>
                            item.category === "robotics" ? (
                              <ProjectCard
                                key={index}
                                {...item}
                                excerpt={excerpt}
                              />
                            ) : null // or render another component
                        )}
                    </div>
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
