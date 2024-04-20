import React from 'react';
import "./ServiceNoForm.css";
import ServiceNoFormSection from '../ServiceNoForm_Section/ServiceNoForm_Section';
import darrow from "../../../assets/Services/downarrow.png";
import downarrow from "../../../assets/Services/uparrow.png";
const ServiceNoForm = () => {
    return (
      <>
        <section className="height snbg">
          <div className="container d-flex justify-content-center align-items-center height">
            <div className="row nrbg gx-1 p-5">
              <div className="d-flex justify-content-center align-items-center">
                <h4>FIND YOUR IDEAS</h4>
              </div>
              <div className="col-md-2 bluebx_section">
                <div className="bluebx">Recognize Daily Needs</div>
                <div className="bluebx">Recognize Daily Needs</div>
                <div className="bluebx">Recognize Daily Needs</div>
              </div>
              <div className="col-md-2 yellowbx_section">
                <div className="yellowbx">
                  <img src={darrow} alt="" className="ymm" />
                </div>
                <div className="yellowbx">
                  <img src={downarrow} alt="" className="ym" />
                </div>
              </div>
              <div className="col-md-2 violetbx_section">
                <div className="violetbx">Pinpoint Areas for Enhancement</div>
              </div>
              <div className="col-md-2 litebx_section">
                <div className="litebx">Evaluate Unmet Needs</div>
                <div className="litebx">Technological Feasibility Check</div>
              </div>
              <div className="col-md-2 greenbx_section">
                <div className="greenbx">Here ‘s your idea</div>
              </div>
              <div className="col-md-2 redbx_section">
                <div className="redbx">Submit it to Charmzz Techs</div>
              </div>
            </div>
          </div>
        </section>

        <ServiceNoFormSection />
      </>
    );
}

export default ServiceNoForm;
