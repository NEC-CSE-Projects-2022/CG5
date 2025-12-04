import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">About the Project</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card fade-in">
              <div className="card-body">
                <p className="lead mb-4">
FusionNet-GLD is an advanced deep learning–
based system created to address the challenge of detecting grape leaf diseases at an early stage. 
Grape cultivation is highly sensitive to leaf diseases, which can significantly reduce yield quality and quantity if not diagnosed in time. 
Traditional methods of disease detection are manual, time-consuming, and often prone to error. 
FusionNet-GLD provides a smart and automated solution by leveraging artificial intelligence to make the process faster, 
more accurate, and reliable.

                </p>
                
                <p className="mb-4">
                  At the core of FusionNet-GLD lies a dual-backbone convolutional neural network (CNN) that integrates the strengths of Xception and InceptionV3 architectures. 
                  This fusion allows the model to capture fine-grained textures as well as high-level semantic features from grape leaf images,
                  ensuring robust classification performance across multiple disease categories. 
                  To build and train the model, a carefully curated and augmented dataset of grape leaf images from PlantVillage and field sources was used, 
                  improving the model’s generalization ability in real-world scenarios.

                </p>
                
                <p className="mb-0">
Through the web-based interface, users can easily upload grape leaf images and instantly receive predictions about whether the leaf is healthy or infected. 
This empowers farmers, researchers, and vineyard managers to make timely decisions, apply proper treatments, and prevent widespread crop damage.
By combining the power of AI with user-friendly design, FusionNet-GLD serves as a practical tool for modern agriculture.
Its ultimate goal is to support sustainable farming, minimize crop losses, enhance grape quality, and contribute to better productivity in vineyards.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <Shield className="text-success mb-3" size={48} />
                <h5>Early Detection</h5>
                <p>Identify diseases before they spread extensively</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <Zap className="text-warning mb-3" size={48} />
                <h5>Fast Analysis</h5>
                <p>Get instant results within seconds of image upload</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <Users className="text-info mb-3" size={48} />
                <h5>Farmer-Friendly</h5>
                <p>Simple interface designed for ease of use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;