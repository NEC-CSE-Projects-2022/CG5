import React from 'react';
import { Target, CheckCircle, Lightbulb, BarChart } from 'lucide-react';

const Objective = () => {
  const objectives = [
    "Develop an accurate AI model for detecting common grape leaf diseases",
    "Create an intuitive web interface for farmers to upload and analyze leaf images",
    "Provide real-time disease identification with confidence scores",
    "Offer treatment recommendations based on detected diseases",
    "Enable early intervention to prevent disease spread",
    "Reduce crop losses and increase agricultural productivity",
    "Minimize pesticide usage through targeted treatment approaches",
    "Support sustainable farming practices through technology"
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Project Objectives</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <Target className="me-2" size={24} />
                  <h4 className="mb-0">Primary Goals</h4>
                </div>
              </div>
              <div className="card-body">
                <ul className="objective-list">
                  {objectives.map((objective, index) => (
                    <li key={index} className="fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <CheckCircle className="text-success mb-3" size={48} />
                <h5>Accuracy</h5>
               <p>Achieve &gt;95% disease detection accuracy through advanced ML models</p>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <Lightbulb className="text-warning mb-3" size={48} />
                <h5>Innovation</h5>
                <p>Implement state-of-the-art computer vision techniques</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <BarChart className="text-primary mb-3" size={48} />
                <h5>Impact</h5>
                <p>Measurable reduction in crop losses and improved yields</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;