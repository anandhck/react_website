import React from "react";
import Landingimg from "../../../assets/Career/Landing.png";
import "./Landing.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <section id="banner" className="height">
        <div class="d-flex section_con_care height justify-content-end align-center">
          <div className="d-flex justify-content-center align-center flex-column text-center">
            <header className="mv">
              <h1>
                Join Our Team aT
                <br />
                Charmzz Techs
              </h1>
              <p>Welcome to the Charmzz Techs Career Page!</p>
              <p>We believe in building a talented and diverse team</p>
              <p>that thrives on innovation and creativity.</p>
              <p>Explore the exciting opportunities we have for you.</p>
            </header>
            <ul class="actions">
              <li>
                <Link to="/careerapply">
                  <Button variant="success">Apply Now</Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="img_Section_care">
            <span class="image d-flex justify-content-center align-center">
              <img src={Landingimg} alt="" className="img-fluid" />
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-end align-bottom">
          <FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" />
        </div>
      </section>
    </>
  );
};

export default Landing;
