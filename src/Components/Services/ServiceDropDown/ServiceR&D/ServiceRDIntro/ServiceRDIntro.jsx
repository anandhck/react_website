import React from 'react';
import ServiceRD from '../ServiceR&D';
import RDSection from '../R&DSection/R&DSection';
import RDThird from '../R&DThird/R&DThird';
import RDFourth from '../R&DFourth/R&DFourth';
import RDF from '../RDF/RDF';
import RDForm from '../RDForm/RDForm';
const ServiceRDIntro = () => {
    return (
      <div>
        <ServiceRD />
        <RDSection />
        <RDThird />
        <RDFourth />
        <RDF />
        <RDForm />
      </div>
    );
}

export default ServiceRDIntro;
