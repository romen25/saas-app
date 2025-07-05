import React from 'react';
import '../App.css';

function Services() {
  const services = [
    { title: 'PAN Card Application', description: 'Apply for a new PAN card or update existing details.' },
    { title: 'Voter ID Registration', description: 'Register for a Voter ID or make corrections.' },
    { title: 'Insurance Services', description: 'Explore insurance plans and manage policies.' },
    { title: 'Digital Printing', description: 'High-quality printing for documents and photos.' },
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;