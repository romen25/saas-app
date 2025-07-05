import React from 'react';

function Services() {
  const services = [
    { title: 'PAN Card Application', description: 'Apply for a new PAN card or update existing details.' },
    { title: 'Voter ID Registration', description: 'Register for a Voter ID or make corrections.' },
    { title: 'Insurance Services', description: 'Explore insurance plans and manage policies.' },
    { title: 'Digital Printing', description: 'High-quality printing for documents and photos.' },
  ];

  const handleApplyClick = (serviceTitle) => {
    console.log(`Apply clicked for: ${serviceTitle}`);
  };

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleApplyClick(service.title)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;