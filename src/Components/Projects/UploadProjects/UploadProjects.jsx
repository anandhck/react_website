import React from 'react';
import "./UploadProjects.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const UploadProjects = () => {
    return (
      <>
        <section className="height fixed-background d-flex justify-content-center align-items-center">
          {/* circle animation */}
          <div class="circle_section">
            <div class="circle big-circle">
              <div class="ball outer_ball"></div>
            </div>
            <div class="circle small-circle-1">
              <div class="ball middle_ball"></div>
            </div>
            <div class="circle small-circle-2">
              <div class="ball inside_ball"></div>
              <div class="ball inside_ball2"></div>
            </div>
          </div>

          {/* circle animation end */}
          {/* <!-- square animation start --> */}

          <div class="outer-box">
            <div class="middle-box">
              {/* <!-- square ball start --> */}
              <div class="inner-box">
                <div class="square_ball square_inside_ball"></div>
              </div>
              <div class="square_ball square_middle_ball"></div>
            </div>
            <div class="square_ball square_outer_ball"></div>
            {/* <!-- square ball end --> */}
          </div>

          {/* square animation end  */}
          <div className="container fbg w-75">
            {/* form start */}
            <div className="blur_bg_f mt-5">
              <Form className="">
                <Form.Group
                  as={Row}
                  className="mb-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    Name :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-2 mt-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    E-mail address :
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-2 mt-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    Organization/School:
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-2 mt-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    Location (Optional):
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mt-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    Profile Picture (Optional):
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mt-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    Social Media Handles (Optional):
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mt-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    Project Title:
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mt-2"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={6} className="text-end">
                    Category
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
                <div className="d-flex justify-content-center mt-4 w-100 gap mb-4">
                  {/* submit button */}
                  <Link to="/diyprojects">
                    <Button variant="success" type="submit" className="tbtn">
                      Cancel
                    </Button>
                  </Link>
                  <Link to="/blogsform">
                    <Button variant="success" type="submit" className="tbtn">
                      Next
                    </Button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </>
    );
}

export default UploadProjects;
