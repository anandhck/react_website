import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const InternFrontEnd = () => {
    return (
      <>
        <div className="intern_from_bg height">
          <div className="form_intro d-flex justify-content-between align-items-center">
            <div className="back_btn ms-3">
              <Link to="/careerapply">
                <Button variant="danger">Back</Button>
              </Link>
            </div>
            <div className="center_box">
              <div className="border_style">
                <h3>Internship Opportunities at Charmzz Techs</h3>
                <h5>
                  Unlock Your Potential with a 30-Day Internship Experience
                </h5>
                <p>
                  Internship Opportunities at Charmzz Techs Unlock Your
                  Potential with a 30-Day Internship Experience Are you ready to
                  dive into the world of technology and innovation? Charmzz
                  Techs invites passionate and aspiring individuals to join our
                </p>
                <br />
                <h5>Duration:</h5>
                <p>- 30 days of immersive hands-on experience.</p>
                <br />
                <h5>Flexible Working Hours:</h5>
                <p>
                  - We understand the value of flexibility. Work at your best
                  times to make the most out of your internship.
                </p>
                <br />
                <h5>Potential for Employment:</h5>
                <p>
                  - Show us your skills and dedication! If we are impressed with
                  your work during the internship, you may have the opportunity
                  to join Charmzz Techs as a full-time employee.
                </p>
                <br />
                <h5>Internship Focus Areas:</h5>
                <p>
                  - Choose from our diverse focus areas, including web
                  development, robotics, automation, and more.
                </p>
                <br />
                <h3>Why Intern with Charmzz Techs?</h3>
                <br />
                <h5>1. Innovative Environment:</h5>
                <p>
                  {" "}
                  - Immerse yourself in a culture of innovation and creativity.
                </p>
                <br />
                <h5>2. Flexible Learning:</h5>
                <p>
                  {" "}
                  - Adapt your internship to your learning goals and preferences
                </p>
                <br />
                <h5>3.Hands-on Experience:</h5>
                <p>
                  {" "}
                  - Gain practical, real-world experience in cutting-edge
                  technologies.
                </p>
                <br />
                <h5>4. Career Development:</h5>
                <p>
                  {" "}
                  - Receive mentorship and guidance from industry professionals.
                </p>
                <br />
                <h3>How to Apply:</h3>
                <p>
                  Ready to embark on this exciting journey? Submit your
                  application and let us know why you're the perfect fit for
                  Charmzz Techs.
                </p>
                <br />
                <br />
                <p>
                  Join us and be a part of a team that values curiosity,
                  creativity, and collaboration. We look forward to welcoming
                  you to Charmzz Techs!
                </p>
              </div>
            </div>
            <div className="apply_btn me-3">
              <Link to="/internapply">
                <Button variant="success">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default InternFrontEnd;
