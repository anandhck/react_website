import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const ServiceThirdForm = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="cntrdiv text-end">
              <h2 className="text-white">Service Request Form</h2>
              <p>
                Please fill out the form below to request our services. Our team
                will review your request promptly and get back to you with
                further details. Thank you for choosing us for your needs!
              </p>
            </div>
          </div>
          <div className="col-md-6 bcln">
            <div className="container form_sectons p-4">
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
                    <Form.Control type="tel" placeholder="number" />
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
                <div className="d-flex justify-content-center mt-4">
                  {/* submit button */}
                  <Link to="/serviceclient">
                    <Button variant="success" type="submit" className="tbtn">
                      SUBMIT
                    </Button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ServiceThirdForm;
