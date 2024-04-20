import React from "react";
import "./ServiceSecondSection.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import brain from "../../../../assets/Services/brain.png";
import desktop from "../../../../assets/Services/eos-icons_software.png";
import settings from "../../../../assets/Services/arcticons_automation.png";
import mobile from "../../../../assets/Services/covid_transmission-virus-mobile-application.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Parallax } from "react-parallax";
import bgimg from "../../../../assets/Services/r&dbg.png";
const ServiceSecondSection = () => {
  return (
    <>
      {/* tabs */}
      <Parallax speed={-10} strength={100} bgImage={bgimg} className="height">
        <section className="height ssbclr d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <Tabs>
                <div className="col-md-4 prmarin">
                  <TabList>
                    <Tab>
                      <div className="cntbx">
                        <div class="d-flex cntxgap cntxgapclr">
                          <img src={brain} alt="" />
                          <div class="w-100">
                            <h5 class="mt-0">Research and Development</h5>
                            <p>Exploring tomorrow's possibilities, today.</p>
                            <div className="d-flex justify-content-end align-items-end me-5">
                              <a href="#">View more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className="cntbx">
                        <div class="d-flex cntxgap cntxgapvclr">
                          <img src={desktop} alt="" />
                          <div class="w-100">
                            <h5 class="mt-0">Research and Development</h5>
                            <p>Exploring tomorrow's possibilities, today.</p>
                            <div className="d-flex justify-content-end align-items-end me-5">
                              <a href="#">View more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className="cntbx">
                        <div class="d-flex cntxgap cntxgapdgclr">
                          <img src={settings} alt="" />
                          <div class="w-100">
                            <h5 class="mt-0">Research and Development</h5>
                            <p>Exploring tomorrow's possibilities, today.</p>
                            <div className="d-flex justify-content-end align-items-end me-5">
                              <a href="#">View more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className="cntbx">
                        <div class="d-flex cntxgap cntxgaplgclr">
                          <img src={mobile} alt="" />
                          <div class="w-100">
                            <h5 class="mt-0">Research and Development</h5>
                            <p>Exploring tomorrow's possibilities, today.</p>
                            <div className="d-flex justify-content-end align-items-end me-5">
                              <a href="#">View more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </TabList>
                </div>
                <div className="col-md-8">
                  <TabPanel>
                    {/* first section */}
                    <div className="panel-content">
                      <div className="pmrgin">
                        <div className="text-white">
                          <h1>Research and Development</h1>
                        </div>
                        <div className="frw d-flex justify-content-between align-items-center">
                          <p>Domains {"->"}</p>
                          <p> Internet of Things </p>
                          <p>Engineering</p>
                        </div>
                        <div className="srw d-flex justify-content-center gap">
                          <p>Robotics </p>
                          <p>Automation</p>
                        </div>
                        <div className="trw d-flex justify-content-center gap">
                          <p>Artificial Intelligence (AI)</p>
                          <p>Renewable Energy</p>
                        </div>
                        <div className="frw d-flex justify-content-center gap">
                          <p>Environmental Science</p>
                          <p>Sustainable Development</p>
                        </div>
                        <div className="ffrw d-flex justify-content-end gap">
                          <p>Nanotechnology</p>
                        </div>

                        <div className="sbtn d-flex justify-content-end flex-column align-items-end">
                          <Link to="/">
                            <Button variant="success">Read More</Button>
                          </Link>
                          <div className="mt-5 text-end">
                            {" "}
                            <p>Successfully completed Project = 13 </p>
                            <p>On Going Projects = 4 </p>
                            <p>In House Project = 5 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* firstsection end */}
                  </TabPanel>
                  <TabPanel>
                    {/* second section start */}
                    <div className="panel-content">
                      <div className="pmrgin">
                        <div className="text-white">
                          <h1>Software Development</h1>
                        </div>
                        <div className="frw d-flex justify-content-around">
                          <p> E-commerce Solutions </p>
                          <p>Web Application Development</p>
                        </div>
                        <div className="srw d-flex justify-content-around">
                          <p>Custom Software Development </p>
                          <p>Mobile App Development (iOS and Android)</p>
                        </div>
                        <div className="trw d-flex justify-content-around">
                          <p>Quality Assurance and Testing Services</p>
                          <p>Cloud-Based Software Solutions</p>
                        </div>
                        <div className="frw d-flex justify-content-center">
                          <p>Content Management Systems (CMS) Development</p>
                        </div>
                        <div className="ffrw d-flex justify-content-around">
                          <p>Software Maintenance and Support</p>
                          <p>Enterprise Resource Planning (ERP) Solutions</p>
                        </div>
                        <div className="srw d-flex justify-content-around">
                          <p>Database Management and Integration</p>
                          <p>API Development and Integration</p>
                        </div>
                        <div className="srw d-flex justify-content-center">
                          <p>Customer Relationship Management (CRM) Systems</p>
                        </div>
                        <div className="sbtn d-flex justify-content-end flex-column align-items-end">
                          <Link to="/">
                            <Button variant="success">Read More</Button>
                          </Link>
                          <div className="mt-5 text-end">
                            {" "}
                            <p>Successfully completed Project = 4 </p>
                            <p>On Going Projects = 2 </p>
                            <p>In House Project = 5 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* second section end */}
                  </TabPanel>
                  <TabPanel>
                    {/* third section */}
                    <div className="panel-content">
                      <div className="pmrgin">
                        <div className="text-white">
                          <h1>Robotics & Automation</h1>
                        </div>
                        <div className="frw d-flex justify-content-start ms-5">
                          <p>
                            {" "}
                            Robotic process automation (RPA) implementation
                          </p>
                        </div>
                        <div className="srw d-flex justify-content-around">
                          <p>Robotic system design and integration </p>
                          <p>Robotics consulting and advisory services</p>
                        </div>
                        <div className="trw d-flex justify-content-around">
                          <p>Autonomous vehicle development</p>
                          <p>Machine learning for robotics applications</p>
                        </div>
                        <div className="frw d-flex justify-content-start ms-5">
                          <p>Content Management Systems (CMS) Development</p>
                        </div>
                        <div className="ffrw d-flex justify-content-around">
                          <p>Software Maintenance and Support</p>
                          <p>Enterprise Resource Planning (ERP) Solutions</p>
                        </div>
                        <div className="srw d-flex justify-content-around">
                          <p>Database Management and Integration</p>
                          <p>API Development and Integration</p>
                        </div>
                        <div className="srw d-flex justify-content-start ms-5">
                          <p>Customer Relationship Management (CRM) Systems</p>
                        </div>
                        <div className="sbtn d-flex justify-content-end flex-column align-items-end">
                          <Link to="/">
                            <Button variant="success">Read More</Button>
                          </Link>
                          <div className="mt-5 text-end">
                            {" "}
                            <p>Successfully completed Project = 24 </p>
                            <p>On Going Projects = 14 </p>
                            <p>In House Project = 9 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* third section end */}
                  </TabPanel>
                  <TabPanel>
                    {/* fourth section */}
                    <div className="panel-content">
                      <div className="pmrgin">
                        <div className="text-white">
                          <h1>Mobile app (ios and Android)</h1>
                        </div>
                        <div className="frw d-flex justify-content-start ms-5">
                          <p>iOS app development</p>
                        </div>
                        <div className="srw d-flex justify-content-around">
                          <p>Mobile UI/UX design</p>
                          <p>Cross-platform app development</p>
                        </div>
                        <div className="trw d-flex justify-content-around">
                          <p>Android app development</p>
                          <p>App testing and quality assurance</p>
                        </div>
                        <div className="frw d-flex justify-content-start ms-5">
                          <p>App maintenance and support</p>
                        </div>
                        <div className="ffrw d-flex justify-content-start ms-5">
                          <p>App deployment and optimization</p>
                        </div>
                        <div className="srw d-flex justify-content-center">
                          <p>
                            Augmented reality (AR) and virtual reality (VR) app
                            development
                          </p>
                        </div>

                        <div className="sbtn d-flex justify-content-end flex-column align-items-end">
                          <Link to="/">
                            <Button variant="success">Read More</Button>
                          </Link>
                          <div className="mt-5 text-end">
                            {" "}
                            <p>Successfully completed Project = 3 </p>
                            <p>On Going Projects = 2 </p>
                            <p>In House Project = 4 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      </Parallax>
    </>
  );
};

export default ServiceSecondSection;
