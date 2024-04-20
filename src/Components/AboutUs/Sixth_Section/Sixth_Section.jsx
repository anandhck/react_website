import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import girl from "../../../assets/About/team icon@2x.png";
import book from "../../../assets/About/career about us@2.png";
import elephant from "../../../assets/About/ele.png"
import elephant1 from "../../../assets/About/ele_1.png";
import elephant2 from "../../../assets/About/ele_2.png";
import "./Sixth_Section.css";
const SixthSection = () => {
  
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [elephant, elephant1, elephant2];

    useEffect(() => {
      // Function to loop through images
      const changeBackgroundImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      // Set interval to switch images every 5 seconds (adjust as needed)
      const interval = setInterval(changeBackgroundImage, 5000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    return (
      <>
        <Parallax strength={100} bgImage={null} className="height">
          {/* <Container fluid className="height"> */}
          <div
            className="ele_img"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              top: "0",
              left: "0",
            }}
          >
            <div className="row align-items-end dark_blur_bg rh_m">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
                <div className="align-items-center img_height">
                  {/* image */}
                  <img src={girl} alt="" />
                </div>
                <div className="res_text">
                  {/* text */}
                  <h3>Discover Our Global Team:</h3>
                  <p>
                    Every seamless design and flawless interaction stems from
                    our diverse, skilled individuals. Our team, from visionary
                    founders to talented developers and support staff, embodies
                    core values of collaboration, creativity, and continuous
                    learning.
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
                <div className="align-items-center img_height me-2">
                  {/* image */}
                  <img src={book} alt="" />
                </div>
                <div className="res_text">
                  {/* text */}
                  <h3>Career Opportunities:</h3>
                  <p>
                    Join the innovators at Charmzz Techs! We offer exciting
                    career opportunities for talented individuals looking to
                    make a difference in the tech industry. Explore our open
                    positions [link to career page] and be part of a team that
                    drives technological advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </Container> */}
        </Parallax>
      </>
    );
}

export default SixthSection;
