import React from 'react';
import "./R&DThird.css";
import rdbg from "../../../../../assets/Services/R&D/rdbg.png";
const RDThird = () => {
    return (
      <>
        <section className="rdthird height d-flex align-items-center justify-content-center">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="hexza_section">
              <div className="hexza">How we do?</div>
              <div className="circlerd circle-top-left text-center">
                MONITORING & ITERATION
              </div>
              <div className="circlerd circle-top-right text-center">
                IMPLEMENTATION & DEPLOYMENT
              </div>
              <div className="circlerd circle-bottom-left text-center">
                RESEARCH & ANALYSIS
              </div>
              <div className="circlerd circle-bottom-right text-center">
                PROTOTYPING & TESTING
              </div>
              <div className="circlerd circle-top text-center">
                DISCOVERY & IDEATION{" "}
              </div>
              <div className="circlerd circle-bottom text-center">
                REFINEMENT & OPTIMIZATION
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default RDThird;
