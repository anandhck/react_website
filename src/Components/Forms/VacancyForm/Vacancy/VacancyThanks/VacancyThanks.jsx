import React from 'react';
import "./VacancyThanks.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const VacancyThanks = () => {
    return (
      <>
        <section className="vthanks_bg">
          <div className="height d-flex justify-content-start align-items-center">
            <div className="vtbox">
              <h4>Submission Successful!</h4>
              <br />
              <p>
                Thank you for applying to join the Charmzz Techs team! Your
                application has been received successfully. We appreciate your
                interest in becoming part of our innovative and dynamic company.
              </p>
              <br />
              <p>
                Our recruitment team will carefully review your application. If
                your qualifications match our current needs, we will be in touch
                to discuss the next steps in the hiring process. Please note
                that due to the high volume of applications, only candidates
                selected for further consideration will be contacted.
              </p>
              <br />
              <p>
                In the meantime, feel free to explore more about Charmzz Techs
                on our website and stay connected with us on our social media
                channels for updates.
              </p>
              <br />
              <p>
                Best of luck, and thank you for considering a career with
                Charmzz Techs!
              </p>
              <p>Warm regards, </p>
              <h4>Charmzz Techs Team</h4>
              <div className="d-flex justify-content-end">
                <Link to="/vacancynapply">
                  <Button variant="danger">Back</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default VacancyThanks;
