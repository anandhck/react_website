import React from 'react';
import RoboticsFirstSection from './RoboticsFirstSection/RoboticsFirstSection';
import RoboticsSecondSection from './RoboticsSecondSection/RoboticsSecondSection';
import RoboticsThirdSection from './RoboticsThirdSection/RoboticsThirdSection';
import RoboticsFourthSection from './RoboticsFourthSection/RoboticsFourthSection';
import RoboticsFifthSection from './RoboticsFifthSection/RoboticsFifthSection';
import RoboticsRequestForm from './RoboticsRequestForm/RoboticsRequestForm';
const Robotics = () => {
    return (
      <>
        <RoboticsFirstSection />
        <RoboticsSecondSection />
        <RoboticsThirdSection />
        <RoboticsFourthSection />
        <RoboticsFifthSection />
        <RoboticsRequestForm />
      </>
    );
}

export default Robotics;
