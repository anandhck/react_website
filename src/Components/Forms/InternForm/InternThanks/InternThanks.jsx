import React from 'react';
import intern_r from "../../../../assets/Career/Forms/intern_thanks.png";
import "./InternThanks.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const InternThanks = () => {
    return (
      <>
        <section className="intern_thanks_bg">
          <div className="d-flex">
            <div className="itbox">
              <h4>Submission Successful!</h4>
              <br />
              <p>
                Your internship application has been successfully submitted to
                Charmzz Techs. We sincerely appreciate your interest in joining
                our team for this exciting learning opportunity.
              </p>
              <br />
              <p>
                Our team will carefully review your application, and if your
                qualifications align with our internship program, we'll be in
                touch with you for the next steps. Please keep an eye on your
                email for any updates.
              </p>
              <br />
              <p>
                In the meantime, take a moment to explore more about Charmzz
                Techs and stay connected with us on our social media channels
                for the latest updates.
              </p>
              <br />
              <p>
                Thank you for considering Charmzz Techs for your internship
                experience. We look forward to the possibility of working
                together!
              </p>
              <p>Best regards, </p>
              <h4>Charmzz Techs.</h4>
            </div>
            <div className="irimg">
              <img src={intern_r} alt="" />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-2">
            <Link to="/careerapply">
              <Button variant="outline-info">BACK</Button>{" "}
            </Link>
          </div>
        </section>
      </>
    );
}

export default InternThanks;
