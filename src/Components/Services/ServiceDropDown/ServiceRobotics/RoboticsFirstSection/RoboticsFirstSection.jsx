import React from 'react';
import "./RoboticsFirstSection.css"
import img1 from "../../../../../assets/Services/Robotics/img1.png";
import img2 from "../../../../../assets/Services/Robotics/img2.png";
import project from "../../../../../assets/Services/R&D/project.png";
import loading from "../../../../../assets/Services/R&D/process.png";
import transfer from "../../../../../assets/Services/R&D/transfer.png";
const RoboticsFirstSection = () => {
    return (
      <>
        <section className="roboticsbg height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="imgcontainer d-flex">
                  <div className="imgcon2">
                    {" "}
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                  <div className="imgcon">
                    <img src={img2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3>SERVICE / Robotics and Automation</h3>
                <div className="rdtext">
                  <p>
                    Revolutionize your operations with our robotics and
                    automation solutions, optimizing efficiency and driving
                    innovation in your business processes
                  </p>

                  <div className="sersection d-flex justify-content-between">
                    <p>Robotics & Automation</p>
                    <div>
                      <p>Request Consultation</p>
                    </div>
                  </div>
                  <div className="iconrd d-flex justify-content-around">
                    <div className="ni">
                      <p>21</p>
                      <img src={project} alt="" />
                    </div>
                    <div className="ni">
                      <p>11</p>
                      <img src={loading} alt="" />
                    </div>
                    <div className="ni">
                      <p>9</p>
                      <img src={transfer} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default RoboticsFirstSection;
