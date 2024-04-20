import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./VacancyUiUx.css";
const VacancyUiUx = () => {
    return (
      <>
        <section className="intern_from_bg height">
          <div className="form_intro d-flex justify-content-between align-items-center">
            {/* centerBox */}
            <div className="center_box">
              {/* button div */}
              <div className="back_btn ms-3">
                <Link to="/careerapply">
                  <Button variant="danger">Back</Button>
                </Link>
              </div>
              <div className="v_border_style">
                <h3> Job Title: UI/UX DESIGNER</h3>
                <h5>Job Description</h5>
                <h3>Responsibilities:</h3>
                <ol>
                  <li>
                    Collaborate with UI/UX designers to implement designs into
                    responsive and visually appealing web interfaces.
                  </li>
                  <li>
                    Develop and maintain high-quality code, ensuring the best
                    possible performance, responsiveness, and security.
                  </li>
                  <li>
                    Optimize web applications for maximum speed and scalability.
                  </li>
                  <li>
                    {" "}
                    Collaborate with back-end developers to integrate
                    user-facing elements with server-side logic.
                  </li>
                  <li>
                    Stay up-to-date with emerging web technologies and industry
                    trends to ensure continuous improvement.
                  </li>
                </ol>
                <br />
                <h5> Qualifications:</h5>
                <h5>Educational Qualification:</h5>
                <p>
                  {" "}
                  Bachelor's degree in Computer Science, Web Development, or a
                  related field.
                </p>
                <br />
                <h5>Professional Qualifications:</h5>
                <li>Bachelor's degree in Computer Science or related field.</li>
                <li>Proven experience as a Front-end Developer.</li>
                <li>Strong proficiency in HTML, CSS, and JavaScript.</li>
                <li>
                  Experience with front-end frameworks such as React, Angular,
                  or Vue.js.
                </li>
                <li>Familiarity with version control systems (e.g., Git).</li>
                <li>Solid understanding of responsive design principles.</li>
                <br />
                <h5>Requirements:</h5>
                <ol>
                  <li>
                    In-depth understanding of the entire web development
                    process.
                  </li>
                  <li>
                    Ability to troubleshoot and debug issues quickly and
                    efficiently
                  </li>
                  <li>Excellent communication and collaboration skills.</li>
                  <li>
                    Strong problem-solving skills and attention to detail.
                  </li>
                  <li>Ability to work in a fast-paced, dynamic environment.</li>
                </ol>
                <br />
                <h5>Employment Type:</h5>
                <li>Full-time</li>
                <li>Remote</li>
                <br />
                <h3>Location:</h3>
                <li>Coimbatore,India. </li>
                <li>Bangalore, India.</li>
                <br />
                <h5>Company Culture and Values:</h5>
                <p>
                  {" "}
                  At Charmzz Techs, we foster a collaborative and innovative
                  work environment. Our company culture is built on the
                  principles of teamwork, continuous learning, and a passion for
                  technology. We value diversity and inclusion, encouraging
                  creativity and open communication among our team members.
                </p>
                <br />
                <br />
                <h5>Benefits and Perks:</h5>
                <h3>1.Professional Development:</h3>
                <ul className="custom-list">
                  <li>
                    Opportunities for continuous learning and skill development.
                  </li>
                  <li>Access to training programs and workshops.</li>
                </ul>
                <br />
                <h3>2. Flexible Work Environment:</h3>
                <ul className="custom-list">
                  <li>Options for flexible working hours and remote work.</li>
                </ul>
                <br />
                <h3>3. Health and Wellness:</h3>
                <ul className="custom-list">
                  <li>Comprehensive health insurance coverage.</li>
                  <li> Wellness programs and initiatives.</li>
                </ul>
                <br />
                <h3>4. Work-Life Balance:</h3>
                <ul className="custom-list">
                  <li>Paid time off and vacation days.</li>
                  <li> Company events and activities for team building.</li>
                </ul>
                <br />
                <h3>5. Career Advancement:</h3>
                <ul className="custom-list">
                  <li>
                    Clear career growth paths and opportunities for advancement.
                  </li>
                  <li> Mentorship programs for professional guidance.</li>
                </ul>
                <br />
                <h3>6.Innovative Workspace:</h3>
                <ul className="custom-list">
                  <li>
                    State-of-the-art workspaces and cutting-edge technology.
                  </li>
                  <li>
                    {" "}
                    A culture that encourages creativity and out-of-the-box
                    thinking.
                  </li>
                </ul>
                <br />
                <h3>7. Team Collaboration:</h3>
                <ul className="custom-list">
                  <li>Collaborative and inclusive team environment.</li>
                  <li> Regular team-building activities and events.</li>
                </ul>
              </div>
              {/* appluy button */}
              <div className="apply_btn me-3">
                <Link to="/vacancyform">
                  <Button variant="success">Apply Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default VacancyUiUx;
