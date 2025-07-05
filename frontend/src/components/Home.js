import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    function Home() {
      const [selectedService, setSelectedService] = useState(null);

      const services = [
        { id: 1, name: 'PAN Card Application', details: 'Apply for a new PAN card or update existing details.' },
        { id: 2, name: 'Voter ID Registration', details: 'Register for a Voter ID or make corrections.' },
        { id: 3, name: 'Insurance Services', details: 'Explore insurance plans and manage policies.' },
      ];

      return (
        <div className="container-fluid mt-5 pt-5">
          {/* Image Banner */}
          <div className="row mb-4">
            <div className="col-12">
              <img
                src="https://via.placeholder.com/1200x400?text=CSC+SaaS+App+Banner"
                className="img-fluid w-100"
                alt="CSC SaaS App Banner"
              />
            </div>
          </div>

          {/* Three Blocks */}
          <div className="row mb-5">
            {/* Block 1: Service List */}
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Our Services</h5>
                  <ul className="list-group list-group-flush">
                    {services.map((service) => (
                      <li
                        key={service.id}
                        className="list-group-item"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedService(service)}
                      >
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Block 2: Dummy Image */}
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/300x200?text=Service+Banner"
                  className="card-img-top"
                  alt="Service Banner"
                />
                <div className="card-body">
                  <p className="card-text">Explore our range of CSC services.</p>
                </div>
              </div>
            </div>
            {/* Block 3: Service Details */}
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service Details</h5>
                  <p className="card-text">
                    {selectedService
                      ? selectedService.details
                      : 'Select a service to view details.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Use My App */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-4">Why Use CSC SaaS App?</h2>
              <p className="lead">
                Our platform simplifies CSC center operations with seamless management of PAN, Voter ID,
                Insurance, and Digital Printing services. Enjoy reliable support, easy-to-use tools, and
                scalable solutions to grow your business efficiently.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="mb-3">Start with Zero Investment</h3>
              <p className="lead">Earn up to ₹6 Lakh to ₹10 Lakh per year!</p>
              <Link to="/join-now" className="btn btn-primary btn-lg">Get Started</Link>
            </div>
          </div>

          {/* India Map with Stats */}
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Our Geographical Presence</h2>
              <img
                src="https://via.placeholder.com/600x400?text=India+Map"
                className="img-fluid mb-4"
                alt="India Map"
              />
              <div className="row">
                <div className="col-md-3">
                  <h5>Customer Base</h5>
                  <p>50,000+ Users</p>
                </div>
                <div className="col-md-3">
                  <h5>Monthly Transactions</h5>
                  <p>10,000+</p>
                </div>
                <div className="col-md-3">
                  <h5>Village Coverage</h5>
                  <p>5,000+ Villages</p>
                </div>
                <div className="col-md-3">
                  <h5>Total Agents Network</h5>
                  <p>1,000+ Agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Home;