import React from 'react';
import { Users, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="hero-title fade-in">Grape Leaf Disease Detection</h1>
            <p className="hero-subtitle fade-in">
              Advanced AI-powered solution for early detection and management of grape leaf diseases
            </p>
            
            <div className="team-info fade-in">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <Users className="me-2" size={24} />
                    <div>
                      <h5 className="mb-1">Team Members</h5>
                      <p className="mb-0">Sd.Shafia, S.Minhaz, Ch.Navya</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center justify-content-center">
                    <User className="me-2" size={24} />
                    <div>
                      <h5 className="mb-1">Project Guide</h5>
                      <p className="mb-0">K.V Narasimha Reddy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;