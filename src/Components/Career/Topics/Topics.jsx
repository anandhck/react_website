import React from "react";
import robo from "../../../assets/Career/Workshop/bg_removed.png";
import { useEffect } from "react";
import "./Topics.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Topics = () => {
  useEffect(() => {
    Aos.init({});

    const addAnimationDelay = () => {
      const boxes = document.querySelectorAll(".topics_box_bg");
      let delay = 0;
      boxes.forEach((box) => {
        box.style.animationDelay = `${delay}s`;
        delay += 1; // Increase delay for next element
      });
    };

    addAnimationDelay();
  }, []);
  return (
    <>
      <section id="topics" className="height">
        <h3>Why Choose Charmzz Techs?</h3>
        <div className="d-flex m_view_change">
          {/* text section */}
          <div className="topics_box">
            <div
              className="topics_box_bg "
            >
              <span className="topics_box_bg_in">
                <h3>Innovative Environment:</h3>
                <p>
                  Immerse yourself in an environment that fosters innovation and
                  creativity. At Charmzz Techs, we encourage out-of-the-box
                  thinking.
                </p>
              </span>
            </div>
            <div className="topics_box_bg  mt-2">
              <span className="topics_box_bg_in">
                <h3>Learning Opportunities:</h3>
                <p>
                  Continuous learning is at the heart of our culture. Access
                  training programs, workshops, and mentorship to enhance your
                  skills.
                </p>
              </span>
            </div>
            <div className="topics_box_bg  mt-2">
              <span className="topics_box_bg_in">
                <h3>Diverse Team:</h3>
                <p>
                  Join a team that values diversity and inclusion. Collaborate
                  with talented individuals from various backgrounds and
                  experiences.
                </p>
              </span>
            </div>
            <div className="topics_box_bg  mt-2">
              <span className="topics_box_bg_in">
                <h3>Career Advancement:</h3>
                <p>
                  Grow your career with clear advancement paths. We provide
                  opportunities for professional development and career
                  progression.
                </p>
              </span>
            </div>
            <div className="topics_box_bg  mt-2">
              <span className="topics_box_bg_in">
                <h3>Work-Life Balance:</h3>
                <p>
                  We believe in a healthy work-life balance. Enjoy flexible
                  working hours and remote work options.
                </p>
              </span>
            </div>
            <div className="topics_box_bg  mt-2">
              <span className="topics_box_bg_in">
                <h3>How to Apply</h3>
                <p>
                  Ready to take the next step in your career? Explore our
                  current job openings, internship opportunities, and upcoming
                  events. Click on the respective links to learn more and
                  apply..
                </p>
              </span>
            </div>
          </div>
          {/* img Section */}
          <div className="t_section_img height">
            <img src={robo} alt="" className="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
