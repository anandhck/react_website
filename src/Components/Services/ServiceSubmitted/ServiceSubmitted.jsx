import React from 'react';
import "./ServiceSubmitted.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ServiceSubmitted = () => {
    return (
      <>
        <section className="subtdtbg height">
          <div className="container">
            <div className="subtdt d-flex justify-content-center align-items-center height flex-column">
              <div className="container subtdtw">
                <span>Dear [Client],</span>
                <p>
                  Thank you for submitting your idea to Charmzz Techs! We're
                  excited to learn more about your vision and explore how we can{" "}
                  <br />
                  work together to turn it into reality.
                </p>
                <p>
                  Our team is dedicated to fostering innovation and bringing
                  creative ideas to life. Your submission is an important step
                  towards that goal, <br /> and we appreciate your trust in us.
                </p>
                <p>Here's what you can expect next:</p>
                <ol>
                  <li>
                    Initial Review: Our team will carefully review the details
                    of your idea to gain a thorough understanding of its scope
                    and potential. This process typically takes 1-2 business
                    days.
                  </li>
                  <li>
                    Follow-up Discussion: Once we've reviewed your idea, one of
                    our team members will reach out to you to schedule a
                    follow-up discussion. During this conversation, we'll delve
                    deeper into your idea, ask any clarifying questions, and
                    discuss next steps. You can expect to hear from us within
                    1-2 business days to arrange a convenient time for the call.
                  </li>
                  <li>
                    Collaborative Exploration: Our team believes in
                    collaboration every step of the way. We'll work closely with
                    you to refine your idea, identify key requirements, and
                    develop a clear roadmap for its implementation.
                  </li>
                  <li>
                    Transparency and Communication: Throughout the process,
                    we'll maintain open lines of communication and keep you
                    updated on our progress. You'll have the opportunity to
                    provide feedback, ask questions, and be actively involved in
                    shaping the direction of the project.
                  </li>
                </ol>
                <p>
                  We're committed to ensuring that your experience with Charmzz
                  Techs is positive and productive. If you have any immediate
                  questions or concerns, feel free to reach out to us at [insert
                  contact information].
                </p>
                <p>
                  Once again, thank you for choosing Charmzz Techs as your
                  partner in innovation. We can't wait to embark on this
                  exciting journey together!
                </p>
                <p></p>
                <p>
                  Best regards,
                  <br /> Jaiwin Sam. <br />
                  CEO, CharmZz TecHs.
                </p>
              </div>
              <div className="bback mt-2">
                <Link to="/service">
                  <Button
                    variant="outline-success"
                    type="submit"
                    className="sbtn"
                  >
                    BACK
                  </Button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default ServiceSubmitted;
