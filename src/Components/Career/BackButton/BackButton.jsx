import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const BackButton = () => {
    return (
      <>
        <div className="d-flex justify-content-center align-item-center">
          <Link to="/">
            <Button variant="outline-info">Info</Button>{" "}
          </Link>
        </div>
      </>
    );
}

export default BackButton;
