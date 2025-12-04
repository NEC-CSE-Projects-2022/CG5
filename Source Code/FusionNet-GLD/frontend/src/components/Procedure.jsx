import React from 'react';
import { Camera, Upload, Brain, FileText } from 'lucide-react';

const Procedure = () => {
  const steps = [
    {
      icon: <Camera size={32} />,
      title: "Image Capture",
      description: "Take clear, high-resolution photos of grape leaves showing symptoms or upload existing images from your device."
    },
    {
      icon: <Upload size={32} />,
      title: "Image Upload",
      description: "Use our secure upload system to submit your grape leaf images for analysis. Multiple images can be processed simultaneously."
    },
    {
      icon: <Brain size={32} />,
      title: "AI Analysis",
      description: "Our trained deep learning model analyzes the uploaded images, identifying disease patterns and characteristics with high precision."
    },
    {
      icon: <FileText size={32} />,
      title: "Results & Recommendations",
      description: "Receive detailed results including disease identification, severity assessment, and recommended treatment options."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">Detection Procedure</h2>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="procedure-step fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="row align-items-center">
                  <div className="col-md-2 text-center">
                    <div className="step-number">
                      {index + 1}
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    <div className="text-success">
                      {step.icon}
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h4 className="mb-2">{step.title}</h4>
                    <p className="mb-0 text-muted">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Technical Specifications</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Supported Image Formats:</h6>
                    <ul className="list-unstyled">
                      <li>• JPEG (.jpg, .jpeg)</li>
                      <li>• PNG (.png)</li>
                      <li>• TIFF (.tiff)</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Requirements:</h6>
                    <ul className="list-unstyled">
                      <li>• Minimum resolution: 640x480</li>
                      <li>• Maximum file size: 10MB</li>
                      <li>• Clear, well-lit images</li>
                    </ul>
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

export default Procedure;