import React from 'react';
import ServiceSFirstSection from './ServiceSFirstSection/ServiceSFirstSection';
import ServiceSSecondSection from './ServiceSSecondSection/ServiceSSecondSection';
import ServiceSThirdSection from './ServiceSThirdSection/ServiceSThirdSection';
import ServiceSFourthSection from './ServiceSFourthSection/ServiceSFourthSection';
import ServiceSFSection from './ServiceSFSection/ServiceSFSection';
import SoftwareRequestForm from './SoftwareRequestForm/SoftwareRequestForm';
const ServiceSoftwareLanding = () => {
    return (
      <>
        <ServiceSFirstSection />
        <ServiceSSecondSection />
        <ServiceSThirdSection />
        <ServiceSFourthSection />
        <ServiceSFSection />
        <SoftwareRequestForm />
      </>
    );
}

export default ServiceSoftwareLanding;
