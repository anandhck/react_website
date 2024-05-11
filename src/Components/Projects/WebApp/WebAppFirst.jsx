import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import card1 from "../../../assets/Projects/WebApp/card1.png";
import card2 from "../../../assets/Projects/WebApp/card2.png";
import card3 from "../../../assets/Projects/WebApp/card3.png";
import card4 from "../../../assets/Projects/WebApp/card4.png";
import card5 from "../../../assets/Projects/WebApp/card5.png";
import card6 from "../../../assets/Projects/WebApp/card6.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Category from "../Category/Category";
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const WebAppFirst = () => {
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
                      <h4>Circheal studio website</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card1} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        The website gives the portfolio of a mandala workshops
                        and their works for sale.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>

                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Santhi social trust</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card2} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        The portfolio of a trust gives the overview of their
                        whole work and services.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>
                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Event Planning Platform</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card3} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Design a web application for event planning, allowing
                        users to create, manage, and RSVP to events
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
                      <h4>Recipe Sharing Platform </h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card4} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Implement user authentication, a searchable recipe
                        database, and features for rating and commenting on
                        recipes.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>

                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Real Estate Listing Platform</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card5} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Create a web app for real estate listings, allowing
                        users to browse and search for properties based on
                        various criteria.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-center">
                      <Button variant="outline-info">READ MORE</Button>
                    </Card.Footer>
                  </Card>
                  <Card className="dark_blur_bg">
                    <div className="dark_blur_bg text-center">
                      <h4>Collaborative Document Editing Platform</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card6} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Design an interface that promotes collaboration and
                        provides a seamless editing experience for users.
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
                          item.category === "webapp" ? (
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

export default WebAppFirst;
