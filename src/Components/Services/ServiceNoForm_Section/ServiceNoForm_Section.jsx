import React from 'react';
import "./ServiceNoForm_Section.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const ServiceNoFormSection = () => {
    return (
      <>
        <section className="snfs height">
          <div className="container">
            <div className="notxts">
              <p>
                We understand that sometimes it takes time to formulate ideas or
                that you may not be sure how to articulate them just <br /> Here
                are a few prompts that might help spark your creativity or give
                us some insight into what you're looking for:
              </p>
              <ol>
                <li>
                  Problem Statements: Think about any challenges or problems{" "}
                  <br />
                  you've encountered in your industry or daily life that you
                  believe could be addressed with a technological solution.
                </li>
                <li>
                  Unmet Needs: Consider aspects of your business or personal
                  life <br />
                  where you feel there's a gap or something missing that could
                  be filled with a new product or service.
                </li>
                <li>
                  Inspiration Sources: Are there any existing technologies or
                  products that you admire or wish could be improved upon?
                  <br /> What features do you appreciate, and what do you think
                  could be done better?
                </li>
                <li>
                  Goals and Objectives: What are your long-term goals or
                  objectives? <br /> How could technology help you achieve them
                  more efficiently or effectively?
                </li>
                <li>
                  User Experience: If you already have an idea in mind, try to
                  visualize how users would interact with it. <br /> What steps
                  would they take, and what would their journey look like?
                </li>
              </ol>
              <p>
                Remember, even if you're not entirely sure about your idea yet,
                any information <br /> you provide will help us better
                understand your needs and preferences. <br /> Feel free to share
                as much or as little as you'd like, and our team will work with
                you to bring your vision to life!
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/serviceform">
                  <Button variant="success" type="submit">
                    LET US KNOW
                  </Button>
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <Link to="/service">
                <Button variant="outline-info" type="submit">
                  BACK
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}

export default ServiceNoFormSection;
