import React from 'react';
import FirstSection from '../Components/Home/FirstSection/Intro_section';
import CardAnimation from '../Components/Home/CardAnimationSection/CardAnimation';
import CardAnimation2 from '../Components/Home/CardAnimationSection_2/CardAnimationSection_2';
import ServiceSection from '../Components/Home/ServiceSection/ServiceSection';
import JobCards from '../Components/Home/JobCards/JobCards';
import SocialLinks from '../Components/Home/SocialLinks/SocialLinks';
// import Esparo from '../Components/Home/Animation_ship/esparo';
// import WebgiViewer from '../Components/WebgiViewer/WebgiViewer';
const Home = () => {
    return (
      <>
        {/* <Esparo /> */}
        {/* <WebgiViewer/> */}
        <FirstSection />
        <CardAnimation />
        <CardAnimation2/>
        <ServiceSection />
        <JobCards />
        <SocialLinks />
      </>
    );
}

export default Home;
