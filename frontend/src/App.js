import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import JoinNow from './components/JoinNow';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/pan" element={<Services />} />
          <Route path="/services/voter-id" element={<Services />} />
          <Route path="/products/pvc-print" element={<Services />} />
          <Route path="/products/business-card" element={<Services />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;