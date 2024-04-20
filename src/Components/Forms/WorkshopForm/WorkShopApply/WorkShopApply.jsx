import React from "react";
import "./WorkShopApply.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import facebook from "../../../../assets/Career/Forms/logos_facebook.png";
import instagram from "../../../../assets/Career/Forms/skill-icons_instagram.png";
import linkedin from "../../../../assets/Career/Forms/devicon_linkedin.png";
import youtube from "../../../../assets/Career/Forms/youtube.png";
import callicon from "../../../../assets/Career/Forms/ion_call.png";
import whatsapp from "../../../../assets/Career/Forms//logos_whatsapp-icon.png";
const WorkShopApply = () => {
  return (
    <>
      <section className="height w_form_bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <h3>CONTACT US</h3>
            <div className="col-md-7 col-sm-12 w_img_center_wrk blur_bg p-3 me-5">
              {/* leftside form */}
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Subject :
                  </Form.Label>
                  <Col sm={8} className="text-white">
                    Regarding workshop
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Interested in :
                  </Form.Label>
                  <Col sm={8} className="d-flex form_flex">
                    <Form.Control
                      className="int_field"
                      type="text"
                      placeholder=""
                    />
                    <p className="note">Use Comma to add multiple category</p>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    E-mail address :
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Mobile number :
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="tel" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Address : ( Optional )
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    City :
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Message :
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <div className="d-flex justify-content-center button_align">
                  <div>
                    <Link to="/workshopapply">
                      <Button variant="outline-info">Back</Button>{" "}
                    </Link>
                  </div>
                  <div>
                    <Link to="/registered">
                      <Button variant="outline-info">Submit</Button>{" "}
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
            <div className="col-md-4 col-sm-12 w_text_center_wrk blur_bg">
              {/* rightside form */}
              <div className="social_section text-white">
                <p>Link us through Social media</p>
                <div className="d-flex justify-content-start align-items-center">
                  <ul>
                    <li>
                      <div className="d-flex contact_w align-items-center">
                        <div>
                          <img src={facebook} alt="" />
                        </div>
                        <div className="icon_p">
                          <p> charmzztechs/facebook.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex contact_w align-items-center">
                        <div>
                          <img src={instagram} alt="" />
                        </div>
                        <div className="icon_p">
                          <p> charmzztechs/instagram.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex contact_w align-items-center">
                        <div>
                          <img src={linkedin} alt="" />
                        </div>
                        <div className="icon_p">
                          <p> charmzztechs/linked.in</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex contact_w align-items-center">
                        <div>
                          <img src={youtube} alt="" />
                        </div>
                        <div className="icon_p">
                          <p> charmzztechs/youtube.com</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="call_section text-white">
                  <p>By call </p>
                  <div className="d-flex justify-content-around align-items-center">
                    {/* icon */}
                    <div className="icon_place">
                      <img src={callicon} alt="" />
                    </div>
                    {/* texts */}
                    <div className="">
                      <div className="contact_l d-flex justify-content-around text-end">
                        <div className="text-end me-3">LONDON</div>
                        <div>+44 7404 038749 </div>
                      </div>
                      <div className="contact_l d-flex justify-content-around text-end">
                        <div className="text-end me-4">INDIA</div>
                        <div> +91 7200986954 </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* whatsapp   */}
                <div className="call_section text-white">
                  <p>By Whats app </p>
                  <div className="d-flex justify-content-around align-items-center">
                    {/* icon */}
                    <div className="icon_place">
                      <img src={whatsapp} alt="" />
                    </div>
                    {/* texts */}
                    <div className="">
                      <div className="contact_l d-flex justify-content-around text-end">
                        <div className="text-end me-3">LONDON</div>
                        <div>+44 7404 038749 </div>
                      </div>
                      <div className="contact_l d-flex justify-content-around text-end">
                        <div className="text-end me-4">INDIA</div>
                        <div> +91 7200986954 </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* email */}
                <div className="call_section text-white">
                  <p>By E-mail </p>
                  <div>
                    {/* icon */}
                    <div className="icon_place"></div>
                    {/* texts */}
                    <div className="contact_l d-flex justify-content-end">
                      charmzztechs@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkShopApply;
