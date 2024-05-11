import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import card1 from "../../../assets/Projects/SoftWare/card1.png";
import card2 from "../../../assets/Projects/SoftWare/card2.png";
import card3 from "../../../assets/Projects/SoftWare/card3.png";
import card4 from "../../../assets/Projects/SoftWare/card4.png";
import card5 from "../../../assets/Projects/SoftWare/card5.png";
import card6 from "../../../assets/Projects/SoftWare/card6.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Category from "../Category/Category";
import { toast } from "react-toastify";
import ProjectCard from "../ProjectCard/ProjectCard";

const SoftwareDevFirst = () => {
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
                      <h4>E-Commerce platform</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card1} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Use modern web development technologies and frameworks
                        to ensure a seamless and secure shopping experience.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>

                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Task Management Application</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card2} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Use technologies like React or Angular for the frontend
                        and Node.js or Django for the backend.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>
                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Health and fitness tracker</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card3} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Build a health and fitness tracker that enables users to
                        log and monitor their exercise routines, nutrition, and
                        overall wellness.
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
                      <h4>Chat Application with AI Integration </h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card4} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Develop a chat application that incorporates natural
                        language processing (NLP) and machine learning
                        capabilities.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>

                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Expense Management System </h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card5} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Create a web-based expense management system for
                        individuals or businesses.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>
                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Social Media Analytics Dashboard</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card6} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Build a dashboard that aggregates and visualizes data
                        from various social media platforms.
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
                          item.category === "softwaredev" ? (
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

export default SoftwareDevFirst;
