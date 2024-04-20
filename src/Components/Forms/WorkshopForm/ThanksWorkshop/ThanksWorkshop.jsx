import React from 'react';
import "./ThanksWorkshop.css";
import img1 from "../../../../assets/Career/Forms/thanks.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const ThanksWorkshop = () => {
    return (
      <>
        {/* <section className="d-flex thanks_w_bg height">
          <div className="">
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-center align-items-center text-end flex-column">
            <div className="text-container">
              <p>Thank you for submitting your workshop inquiry.</p>
              <p>We appreciate your interest in our workshops.</p>
              <p>Our team will review your inquiry and get back to</p>
              <p>you as soon as possible with further details.</p>
              <p>meantime, if you have any urgent questions or</p>
              <p>concerns, feel free to reach out to us directly a</p>
              <p>Whatsapp {"->"} +44 7404038749.</p>
              <p>We look forward to the opportunity to assist you</p>
              <p>further.</p>
              <p>Best regards,</p>
              <p>Charmzz Techs</p>
            </div>
        
            <Link to="/careerapply">
              <Button variant="danger">Back</Button>{" "}
            </Link>
          </div>
        </section> */}
        <section className="wthanks_bg">
          <div className="height d-flex justify-content-center align-items-center">
            <div className="wtbox">
              <p>Thank you for submitting your workshop inquiry.</p>
              <p>We appreciate your interest in our workshops.</p>
              <p>Our team will review your inquiry and get back to</p>
              <p>you as soon as possible with further details.</p>
              <p>meantime, if you have any urgent questions or</p>
              <p>concerns, feel free to reach out to us directly a</p>
              <p>Whatsapp {"->"} +44 7404038749.</p>
              <p>We look forward to the opportunity to assist you</p>
              <p>further.</p>
              <p>Best regards,</p>
              <p>Charmzz Techs</p>
              <div className="d-flex justify-content-end">
                <Link to="/careerapply">
                  <Button variant="danger">Back</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default ThanksWorkshop;
