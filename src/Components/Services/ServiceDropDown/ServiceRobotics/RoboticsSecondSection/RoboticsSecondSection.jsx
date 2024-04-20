import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import mimg from "../../../../../assets/Services/Robotics/machine.png";
import mimg2 from "../../../../../assets/Services/R&D/settings.png";
import mimg3 from "../../../../../assets/Services/R&D/tele.png";
import mimg4 from "../../../../../assets/Services/R&D/robo.png";
const RoboticsSecondSection = () => {
    return (
      <>
        <section className="serrdbg height d-flex align-items-center">
          <div className="container">
            <h4 className="text-white">WHAT WE OFFER</h4>
            <CardGroup className="textb">
              <Card>
                <Card.Img variant="top" src={mimg} />
                <Card.Body className="blur_bg cardorg">
                  <Card.Title>Custom Robotics Solution</Card.Title>
                  <Card.Text>
                    Tailored robotic systems designed to meet your specific
                    industry needs, enhancing productivity and precision in
                    manufacturing, logistics, and beyond.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={mimg2} />
                <Card.Body className="cardblue">
                  <Card.Title>Automated Process Integration</Card.Title>
                  <Card.Text>
                    Seamless integration of automation technologies into
                    existing workflows, streamlining operations and reducing
                    manual labor while maximizing efficiency.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={mimg3} />
                <Card.Body className="cardvio">
                  <Card.Title>Smart Factory Solution</Card.Title>
                  <Card.Text>
                    Cutting-edge automation solutions for smart factories,
                    leveraging IoT sensors, AI algorithms, and robotics to
                    optimize production processes and enable predictive
                    maintenance.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={mimg4} />
                <Card.Body className="cardorg">
                  <Card.Title>Robotics Consultation and Training</Card.Title>
                  <Card.Text>
                    Expert consultation and comprehensive training programs to
                    empower your team in harnessing the full potential of
                    robotics and automation technologies for sustainable growth
                    and innovation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </section>
      </>
    );
}

export default RoboticsSecondSection;
