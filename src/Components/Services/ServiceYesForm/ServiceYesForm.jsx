import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ServiceYesForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ServiceYesForm = () => {
    return (
      <>
        <div className="syf d-flex justify-content-center align-items-center height">
          <div className="container syfc">
            <Row>
              <Col
                md={7}
                className="d-flex justify-content-start align-items-start syft"
              >
                <div className="container p-5">
                  <h3>
                    Have an idea but not sure how to proceed? Don't worry; we're
                    here to transform your vision into reality.
                  </h3>
                  <p>
                    Charmzz Techs welcomes your innovative ideas! Let us do the
                    heavy lifting for you, from the initial research phase to
                    developing a fully realized solution.
                  </p>

                  <li>
                    No Worries About Research: Feel assured—our team handles all
                    the necessary research work for your idea's development. You
                    focus on the concept; we'll handle the groundwork.
                  </li>
                  <li>
                    Who Can Submit an Idea for Development?Anyone! Whether
                    you're a student, professional, entrepreneur, or an
                    individual with a spark of creativity, we encourage you to
                    share your ideas. We're here to build, develop, and bring
                    innovation to life, together.
                  </li>
                </div>
              </Col>

              <Col
                md={5}
                className="d-flex justify-content-start align-items-center syfbg"
              >
                {/* form start */}
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Name :
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2 mt-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      E-mail address :
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2 mt-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Mobile number (Optional) :
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2 mt-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Profession :
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2 mt-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Idea :
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control as="textarea" rows={3} />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mt-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Message :
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control as="textarea" rows={3} />
                    </Col>
                  </Form.Group>
                  {/* button */}
                  <div className="d-flex btnsyb">
                    <Link to="/service">
                      <Button variant="outline-info" className="bbtn">
                        BACK
                      </Button>{" "}
                    </Link>
                    <Link to="/serviceclient">
                      <Button variant="success" type="submit" className="sbtn">
                        SUBMIT
                      </Button>{" "}
                    </Link>
                  </div>
                </Form>

                {/* formend */}
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
}

export default ServiceYesForm;
