import React from 'react';

function JoinNow() {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Join Now</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title text-center">As Agent</h3>
              <h4 className="text-center text-primary">₹99/-</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Life Time Validity</li>
                <li className="list-group-item">Chat Support</li>
              </ul>
              <div className="card-footer text-center">
                <button className="btn btn-primary">Join as Agent</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title text-center">As Distributor</h3>
              <h4 className="text-center text-primary">₹599/-</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Life Time Validity</li>
                <li className="list-group-item">Unlimited Agent ID Creation</li>
                <li className="list-group-item">Dedicated Chat Support</li>
              </ul>
              <div className="card-footer text-center">
                <button className="btn btn-primary">Join as Distributor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinNow;