import React from 'react';
import ServiceIntro from './ServiceIntro/ServiceIntro';
import ServiceSecondSection from "./ServiceSecondSection/ServiceSecondSection";
import ServiceThirdSection from './ServiceThirdSection/ServiceThirdSection';
const ServiceLanding = () => {
  return (
    <div>
      <ServiceIntro />
      <ServiceSecondSection />
      <ServiceThirdSection />
    </div>
  );
}

export default ServiceLanding;
