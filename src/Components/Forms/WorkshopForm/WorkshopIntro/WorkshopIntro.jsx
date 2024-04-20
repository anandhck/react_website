import React from 'react';
import background from "../../../../assets/Career/Forms/workshop_bg.png";
import "./WorkshopIntro.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const WorkshopIntro = () => {
    return (
      <>
        <section className="height workshop_bg d-flex justify-content-center align-items-center flex-column">
          <div className="container ">
            <div className="row r_flex">
              <div className="col-md-6 col-sm-12 img_center_wrk">
                <img src={background} className="" alt="" />
              </div>
              <div className="col-md-6 col-sm-12 text_center_wrk">
                <p>
                  We're excited to announce that all booking slots for our
                  upcoming workshop have been filled. We appreciate the
                  overwhelming response and interest from everyone.
                </p>
                <p>
                  If you weren't able to secure a slot, we apologize for any
                  inconvenience caused. However, we encourage you to stay tuned
                  for future workshops and events.
                </p>
                <p>
                  For those with special requirements or inquiries, please feel
                  free to contact us at charmzztechs@gmail.com. Our team will do
                  their best to accommodate your needs and assist you further.
                </p>
                <p className="text-left">
                  Thank you for your understanding and continued support.
                </p>
                <p className="text-left">Best regards,</p>
                <p className="text-left">CHARMZZ TECHS.</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center button_align">
            <div>
              <Link to="/careerapply">
                <Button variant="outline-info">Back</Button>{" "}
              </Link>
            </div>
            <div>
              <Link to="/workshopform">
                <Button variant="outline-info">Contact Us</Button>{" "}
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}

export default WorkshopIntro;
