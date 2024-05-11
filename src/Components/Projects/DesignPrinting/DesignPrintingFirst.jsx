import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
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
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const DesignPrintingFirst = () => {
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
                      <h4>
                        3D-Printed Home Decor <hr />{" "}
                      </h4>
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
                        Develop a series of 3D-printed educational kits for STEM
                        (Science, Technology, Engineering, and Mathematics)
                        learning.
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
                          item.category === "design" ? (
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

export default DesignPrintingFirst;
