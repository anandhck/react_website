import React from 'react';
import FirstSection from '../Components/AboutUs/First_Section/First_Section_Abt';
import SecondSectionAbt from '../Components/AboutUs/Second_Section/Second_Section_Abt';
import ThirdSection from '../Components/AboutUs/Third_Section/Third_Section';
import FourthSection from '../Components/AboutUs/Fourth_Section/Fourth_Section';
import FifthSection from '../Components/AboutUs/Fifth_Section/Fifth_Section';
import SixthSection from '../Components/AboutUs/Sixth_Section/Sixth_Section';
import SocialLinks from "../Components/Home/SocialLinks/SocialLinks";
const AboutUs = () => {
    return (
      <>
        <FirstSection />
        <SecondSectionAbt />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SocialLinks />
      </>
    );
}

export default AboutUs;
