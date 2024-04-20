import React from "react";
// import WebgiViewer from "../../WebgiViewer/WebgiViewer";
// import Esparo from "../Animation_ship/esparo";
import { useEffect} from "react";
import "./Intro_section.css";
import Aos from "aos";
import "aos/dist/aos.css";
const IntroSection = () => {
   useEffect(() => {
     Aos.init({});
   }, []);
  return (
    <>
      {/* first section */}
      <div className="fixed-background">
        <div className="first_section" id="text_section">
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
          {/* text box start */}
          <div className="row blur_bg p-5 ms-5 me-5 mt-3">
            <h3 className="text-center text-white">
              Charmzz Techs is a leading technology company dedicated
            </h3>
            <div className="col-6 right-border-v text-end p-3">
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                className="text-white"
              >
                Welcome to Charmzz Techs, <br /> a hub of innovation <br />{" "}
                where cutting-edge technology meets visionary solutions.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                With a passion for pushing technological boundaries, <br /> we
                thrive on collaborative excellence to deliver transformative{" "}
                <br /> digital experiences that define the future.
              </p>
            </div>
            <div className="col-6 left-border-v text-start text-white p-3">
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                At Charmzz Techs, <br /> we're committed to reshaping industries{" "}
                <br />
                through our expertise in R&D, <br /> software development,
                robotics, and automation.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                Join us on this exciting journey, where creativity, <br />{" "}
                expertise, and innovation converge to drive technological
                evolution.
              </p>
            </div>
            {/* KnowMore button bootstrap */}
            <div className="know_more_btn text-end">
              <button type="button" className="btn btn-success">
                KnowMore
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* first section end */}
    </>
  );
};

export default IntroSection;
