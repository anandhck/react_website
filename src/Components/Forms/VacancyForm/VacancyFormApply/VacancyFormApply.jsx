import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./VacancyFormApply.css";
import { Link } from "react-router-dom";
const VacancyFormApply = () => {
     const [dob, setDOB] = useState("");

     const handleDOBChange = (e) => {
       setDOB(e.target.value);
     };
     // form field show
     const [showFormField, setShowFormField] = useState(false);

     const handleCheckboxChange = (e) => {
       setShowFormField(e.target.checked);
     };
    return (
      <>
        <section className="height d-flex justify-content-center align-items-center f_p">
          <div className="intern_from_section d-flex justify-content-start align-items-center flex-column">
            <Form>
              <div className="mt-5">
                <h4>Personal Information</h4>
              </div>
              <div className="f_w">
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Name
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Email
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Mobile number
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="tel" placeholder="Mobile Number" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Address
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="Address" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    Gender
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select defaultValue="Choose...">
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 mt-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={4}>
                    D.O.B
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="date"
                      value={dob}
                      onChange={handleDOBChange}
                    />
                  </Col>
                </Form.Group>
                {/* education form */}
                <div className="educational_form">
                  <h4>Educational Information</h4>
                  <Form.Group
                    as={Row}
                    className="mb-3 mt-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Highest level of qualification
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="qualification" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 mt-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Name of Institution
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Institution" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 mt-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Major/ Area of study
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="study" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 mt-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Graduation Year
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="tel" placeholder="GraduationYear" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 mt-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Area of Interest
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Select defaultValue="Choose...">
                        <option>one</option>
                        <option>Two</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </div>
                {/* employee details */}
                <Form.Check
                  label="Employment Details"
                  type="switch"
                  id="custom-switch"
                  checked={showFormField}
                  onChange={handleCheckboxChange}
                />
                {showFormField && (
                  <div className="educational_form">
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Previous Employment
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          placeholder="Previous Employment"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Job Titles
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" placeholder="Titles" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Employment Periods
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          placeholder="Employment Periods"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Job Responsibilities
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          placeholder="Job Responsibilities"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Relevant Skills (Technical, soft skills, etc)
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          placeholder="Job Responsibilities"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Certification (if applicable)
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="file" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Resume
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="file" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={4}>
                        Cover Letter
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="file" />
                      </Col>
                    </Form.Group>
                  </div>
                )}
                <div className="educational_form">
                  <h4>Reference</h4>
                  <Form.Group
                    as={Row}
                    className="mb-3 mt-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={4}>
                      Name
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
                      Title
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
                      Contact information
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="" />
                    </Col>
                  </Form.Group>
                </div>

                <div className="d-flex justify-content-around mb-3 from_btns">
                  <Link to="/internshipform">
                    <Button variant="outline-info">BACK</Button>{" "}
                  </Link>
                  <Link to="/internapply">
                    <Button variant="outline-info">NEXT</Button>{" "}
                  </Link>
                </div>
              </div>
              <div className="vform_text p-2">
                <div className="d-flex">
                  <h5>
                    I hereby confirm that the above-given details are accurate
                    and genuine to the best of my knowledge, and I consent to
                    submit them as such for the required purpose.
                  </h5>
                  <Link to="/">
                    <Button variant="outline-info">Confirm</Button>{" "}
                  </Link>
                </div>

                <br />
                <p>
                  By submitting this job application form, I hereby consent and
                  authorize Charmzz Techs to collect, process, and use the
                  personal information provided herein for the purpose of
                  recruitment and employment considerations. I understand that
                  this may include, but is not limited to, contacting me
                  regarding job vacancies, submitting my details to relevant
                  hiring managers, and conducting background checks as
                  necessary.
                </p>
                <br />

                <p>
                  I acknowledge that the information provided will be used
                  solely for recruitment purposes and will be treated with
                  confidentiality in accordance with Charmzz Techs' privacy
                  policy.
                </p>
              </div>
              <div className="s_m d-flex">
                <Link to="/vacancyform">
                  <Button variant="outline-info">BACK</Button>{" "}
                </Link>
                <Link to="/vacancyreview">
                  <Button variant="outline-info">REVIEW & SUBMIT</Button>{" "}
                </Link>
              </div>
            </Form>
          </div>
        </section>
      </>
    );
}

export default VacancyFormApply;
