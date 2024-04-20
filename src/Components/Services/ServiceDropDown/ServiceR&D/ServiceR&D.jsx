import React from 'react';
import "./ServiceR&D.css";
import lading from "../../../../assets/Services/R&D/process.png";
import project from "../../../../assets/Services/R&D/project.png";
import transfer from "../../../../assets/Services/R&D/transfer.png";
import rimg from "../../../../assets/Services/R&D/build.png";
import rimg2 from "../../../../assets/Services/R&D/group.png";
const ServiceRD = () => {
    return (
      <>
        <section className="serrdbg height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="imgcontainer d-flex">
                  <div className="imgcon2">
                    {" "}
                    <img src={rimg2} alt="" className="img-fluid" />
                  </div>
                  <div className="imgcon">
                    <img src={rimg} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3>SERVICE / R & D</h3>
                <div className="rdtext">
                  <p>
                    Unlock innovation with our R&D services, where
                    groundbreaking ideas meet tangible solutions.
                  </p>

                  <div className="sersection d-flex justify-content-between">
                    <p>Software Development</p>
                    <div>
                      <p>Request Consultation</p>
                    </div>
                  </div>
                  <div className="iconrd d-flex justify-content-around">
                    <div className="ni">
                      <p>4</p>
                      <img src={project} alt="" />
                    </div>
                    <div className="ni">
                      <p>2</p>
                      <img src={lading} alt="" />
                    </div>
                    <div className="ni">
                      <p>5</p>
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

export default ServiceRD;
