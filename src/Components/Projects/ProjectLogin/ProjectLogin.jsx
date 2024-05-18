import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AuthContext } from "../../../context/authContext";
const ProjectLogin = () => {
  const [inputs, SetInputs] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    SetInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  
  const { login } = useContext(AuthContext);
  
  console.log("currentUser", login);
  
  const[err, serErorr] = useState(null);
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("click");
      await login(inputs)
      navigate("/blogsform");
    } catch (err) {
      console.log(err);
      serErorr(err.response.data)
    }
  };

  console.log("setinputs", inputs);

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
                  <Form.Control
                    required
                    type="text"
                    name="username"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-2 mt-2"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={6} className="text-end">
                  password :
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <span className="text-white">
                  Don't you have an account <Link to="/register">Register</Link>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                {err && <p className="text-white">{err}</p>}
              </div>

              <div className="d-flex justify-content-center mt-4 w-100 gap mb-4">
                {/* submit button */}
                <Link to="/diyprojects">
                  <Button variant="success" type="submit" className="tbtn">
                    Cancel
                  </Button>
                </Link>

                <Button
                  variant="success"
                  type="submit"
                  className="tbtn"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectLogin;
