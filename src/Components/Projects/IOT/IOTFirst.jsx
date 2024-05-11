import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import card1 from "../../../assets/Projects/IOT/card1.png";
import card2 from "../../../assets/Projects/IOT/card2.png";
import card3 from "../../../assets/Projects/IOT/card3.png";
import card4 from "../../../assets/Projects/IOT/card1.png";
import card5 from "../../../assets/Projects/IOT/card4.png";
import card6 from "../../../assets/Projects/IOT/card5.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Category from "../Category/Category";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from "../ProjectCard/ProjectCard";
const IOTFirst = () => {
  const [data, setData] = useState([]);
  console.log("Data:", data);
  useEffect(() => {
    loadBlogsData();
  }, []);

  const loadBlogsData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/posts");
      if (res.status === 200) {
        console.log("data check", res.data);
        setData(res.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast(err);
    }
  };
  console.log("dta", data);

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + "...";
    }
    return str;
  };
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
                      <h4>Environmental Monitoring System</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card1} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Develop an IoT solution for monitoring environmental
                        parameters such as air quality, temperature, and
                        humidity.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>

                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>IoT-Based Healthcare Monitoring</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card2} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Design a secure platform for real-time monitoring and
                        alerting, facilitating remote healthcare management.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>
                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Smart Waste Management System</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card3} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Design an IoT-based waste management system to optimize
                        garbage collection routes and schedules.
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
                      <h4>Industrial IoT (IIoT) for Predictive Maintenance </h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card4} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Utilize sensors to monitor equipment conditions, analyze
                        the data, and predict potential failures.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>

                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>IoT-Based Energy Monitoring and Management</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card5} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Create a system for monitoring and managing energy
                        consumption in buildings or homes using IoT devices.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>
                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Parking Management System</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card6} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Develop an IoT-enabled parking management system that
                        provides real-time information about available parking
                        spaces.
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
                          item.category === "iot" ? (
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
};

export default IOTFirst;
