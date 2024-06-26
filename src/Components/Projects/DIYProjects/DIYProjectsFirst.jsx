import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import Card from "react-bootstrap/Card";
import card1 from "../../../assets/Projects/DIY/card1.png";
import card2 from "../../../assets/Projects/DIY/card2.png";
import card3 from "../../../assets/Projects/DIY/card3.png";
import card4 from "../../../assets/Projects/DIY/card4.png";
import card5 from "../../../assets/Projects/DIY/card5.png";
import card6 from "../../../assets/Projects/DIY/card6.png";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from "../ProjectCard/ProjectCard";
const DIYProjectsFirst = () => {
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

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  const excerpt = (str, maxLength) => {
    // Remove HTML tags from the content
    const plainText = stripHtmlTags(str);

    // Truncate the plain text to the desired length
    if (plainText.length > maxLength) {
      return plainText.substring(0, maxLength) + "...";
    }
    return plainText;
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
                      <h4>Arduino Weather Station:</h4>
                    </div>
                    <Card.Img variant="top" className="p-2" src={card1} />
                    <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
                      <Card.Text>
                        Create your own weather station using Arduino, sensors,
                        and a display to monitor real-time temperature,
                        humidity, and atmospheric pressure.
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
                        Craft a futuristic smart mirror using a two-way mirror,
                        a Raspberry Pi, and custom software to display real-time
                        information like weather and calendar updates.
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
                        control using platforms like Arduino and Raspberry Pi to
                        control lights, appliances, and more.
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
                        components and Arduino, combining audio engineering with
                        electronics.
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
                          item.category === "diyprojects" ? (
                            <ProjectCard
                              key={index}
                              {...item}
                              excerpt={(str) => excerpt(str, 100)}
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

export default DIYProjectsFirst;
