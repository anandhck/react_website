import React from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Category = () => {
    return (
      <div>
        <div className="sidebar dark_blur_bg d-flex justify-content-center flex-column align-items-center">
          <Link to="/uploadprojects">
            <Button variant="outline-info" className="mt-3">
              Upload Projects
            </Button>
          </Link>
          <ul>
            <li>
              <Link to="/roboticsprojects">ROBOTICS AND AUTOMATION</Link>
            </li>
            <li>
              <Link to="/diyprojects">DIY PROJECTS</Link>
            </li>
            <li>
              <Link to="/softwaredev">SOFTWARE DEVELOPMENT</Link>
            </li>
            <li>
              <Link to="/iot">IOT</Link>
            </li>
            <li>
              <Link to="/webapp">WEB APP AND DESIGING</Link>
            </li>
            <li>
              <Link to="/design">3D DESIGING AND PRINTING</Link>
            </li>
            <li>
              <Link to="/othersprojects">OTHERS</Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Category;
