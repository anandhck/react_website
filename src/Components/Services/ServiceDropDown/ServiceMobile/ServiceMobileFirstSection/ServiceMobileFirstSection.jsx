 import React from 'react';
 import project from "../../../../../assets/Services/R&D/project.png";
 import loading from "../../../../../assets/Services/R&D/process.png";
 import transfer from "../../../../../assets/Services/R&D/transfer.png";
 import cloud from "../../../../../assets/Services/Software/cloud.png";
 import keyboard from "../../../../../assets/Services/Software/keyboard.png";
 const ServiceMobileFirstSection = () => {
    return (
      <>
        <section className="sersoftbg height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="imgcontainer d-flex">
                  <div className="imgcon2">
                    {" "}
                    <img src={cloud} alt="" className="img-fluid" />
                  </div>
                  <div className="imgcon">
                    <img src={keyboard} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h3>SERVICE / Software Development</h3>
                <div className="rdtext">
                  <p>
                    Elevate your business with our mobile app development
                    services, offering seamless experiences for both iOS and
                    Android platforms.
                  </p>

                  <div className="sersection d-flex justify-content-between">
                    <p>Mobile App (ios and Android)</p>
                    <div>
                      <p>Request Consultation</p>
                    </div>
                  </div>
                  <div className="iconrd d-flex justify-content-around">
                    <div className="ni">
                      <p>13</p>
                      <img src={project} alt="" />
                    </div>
                    <div className="ni">
                      <p>4</p>
                      <img src={loading} alt="" />
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
 
 export default ServiceMobileFirstSection;
 