import React from "react";
import "./ServiceThirdSection.css";
import { Parallax } from "react-parallax";
import servicet from "../../../../assets/Services/fbgimg.png";
import ServiceThirdForm from "../ServiceThirdForm/ServiceThirdForm";
const ServiceThirdSection = () => {
  return (
    <>
      <Parallax
        speed={-10}
        strength={100}
        bgImage={servicet}
        className="height"
      >
        <section className="stbg height d-flex align-items-center">
          <div className="container">
            <ServiceThirdForm />
          </div>
        </section>
      </Parallax>
    </>
  );
};

export default ServiceThirdSection;
