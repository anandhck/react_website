import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/Button";
import { AuthContext } from '../../context/authContext';


  

const Header = () => {
  const { currentUser, logout, login } = useContext(AuthContext);
  
  console.log("currentuser", currentUser, login);
    const [menu, setMenu] = useState('home')
    return (
      <>
        <nav className="navbar navbar-expand-xl sticky-top">
          <div className="container-fluid">
            <img className="navbar-brand" src={logo} alt="logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#headernav_id"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse left-to-right-collapse"
              id="headernav_id"
            >
              <ul className="navbar-nav ms-auto nav-menu nav_items_gap blur_bg">
                <li
                  onClick={() => {
                    setMenu("home");
                  }}
                  className="nav-item text-white"
                >
                  <Link to="/">HOME</Link> {menu === "home" ? <hr /> : <></>}
                </li>
                <li
                  onClick={() => {
                    setMenu("projects");
                  }}
                  className="nav-item "
                >
                  <Link to="/project">PROJECTS</Link>
                  {menu === "projects" ? <hr /> : <></>}
                </li>
                <li
                  onClick={() => {
                    setMenu("career");
                  }}
                  className="nav-item"
                >
                  <Link to="/career">CAREER</Link>
                  {menu === "career" ? <hr /> : <></>}
                </li>
                <li className="nav-item">
                  <Dropdown as={ButtonGroup}>
                    <Button variant="info">
                      <Link to="/service">SERVICES</Link>
                    </Button>
                    <Dropdown.Toggle
                      split
                      variant="success"
                      id="dropdown-custom-2"
                    />
                    <Dropdown.Menu className="super-colors">
                      <Dropdown.Item eventKey="1">
                        <Link to="/R&D">R & D</Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        <Link to="/servicesoftware">Software development</Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <Link to="/robotics">Robotics & Automation</Link>
                      </Dropdown.Item>

                      <Dropdown.Item eventKey="4">
                        <Link to="/mobile">Mobile App (iOS & Android)</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li
                  onClick={() => {
                    setMenu("contactus");
                  }}
                  className="nav-item"
                >
                  <Link to="/contactus">CONTACT US</Link>
                  {menu === "contactus" ? <hr /> : <></>}
                </li>
                <li
                  onClick={() => {
                    setMenu("aboutus");
                  }}
                  className="nav-item"
                >
                  <Link to="/aboutus">ABOUT US</Link>
                  {menu === "aboutus" ? <hr /> : <></>}
                </li>
              </ul>
              <form action="POST" className="d-flex ms-2">
                <input
                  type="search"
                  className="form-control me-2"
                  placeholder="Search"
                />
                <button type="button" className="btn btn-outline-info me-2">
                  SEARCH
                </button>
                {currentUser ? (
                  <Link to="/diyprojects">
                    <span className="btn btn-outline-danger" onClick={logout}>
                      Logout
                    </span>
                  </Link>
                ) : (
                  <Link to="/userlogin">
                    <Button className="mt-3 btn btn-outline-danger">
                      Login
                    </Button>
                  </Link>
                )}
              </form>
            </div>
          </div>
        </nav>
      </>
    );
    
}

export default Header
