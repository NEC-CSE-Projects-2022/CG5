import React, { useState, useRef } from 'react';
import { Upload, File, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import jsPDF from "jspdf";

const Validation = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null); // ✅ ADDED: to show preview

  const handleDownloadReport = () => {
  if (!results) return;

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Grape Leaf Disease Analysis Report", 10, 15);

  doc.setFontSize(12);
  doc.text(`File Name: ${selectedFile.name}`, 10, 30);
  doc.text(`Detected Disease: ${results.disease}`, 10, 40);
  doc.text(`Confidence: ${results.confidence}%`, 10, 50);
  doc.text(`Severity: ${results.severity}`, 10, 60);

  doc.text("Recommendations:", 10, 75);

  results.recommendations.forEach((rec, index) => {
    doc.text(`• ${rec}`, 12, 85 + index * 10);
  });

  doc.save("grape_disease_report.pdf");
};

  const handleFileSelect = (file) => {
    if (file && (file.type.startsWith('image/'))) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // ✅ ADDED: preview image
      setResults(null);
    } else {
      alert('Please select a valid image file (JPEG, PNG, TIFF)');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  // ✅ CHANGED: Real Flask API call instead of fake simulation
  const handleAnalyze = async () => {
    if (!selectedFile) return;
    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResults(data); // ✅ Backend returns real model results
    } catch (error) {
      alert("Error: Could not connect to AI server. Make sure Flask is running!");
    }

    setIsAnalyzing(false);
  };

  const resetValidation = () => {
    setSelectedFile(null);
    setPreview(null); // ✅ ADDED reset preview
    setResults(null);
    setIsAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Validation & Testing</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Upload Grape Leaf Image for Analysis</h5>
              </div>
              <div className="card-body">
                {!selectedFile && (
                  <div
                    className={`upload-area ${dragOver ? 'drag-over' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="upload-icon" />
                    <h4>Drag & Drop your image here</h4>
                    <p className="text-muted mb-3">or click to browse files</p>
                    <button className="btn btn-primary">
                      Browse Files
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="d-none"
                    />
                    <div className="mt-3">
                      <small className="text-muted">
                        Supported formats: JPEG, PNG, TIFF (Max: 10MB)
                      </small>
                    </div>
                  </div>
                )}

                {selectedFile && !results && (
                  <div className="text-center">
                    
                    {/* ✅ IMAGE PREVIEW */}
                    {preview && (
                      <img 
                        src={preview}
                        alt="Selected Leaf"
                        style={{ width: "200px", borderRadius: "10px", marginBottom: "10px" }}
                      />
                    )}

                    <div className="card mb-3">
                      <div className="card-body">
                        <File className="text-success mb-2" size={48} />
                        <h5>{selectedFile.name}</h5>
                        <p className="text-muted">
                          Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <div className="d-flex gap-2 justify-content-center">
                          <button
                            className="btn btn-primary"
                            onClick={handleAnalyze}
                            disabled={isAnalyzing}
                          >
                            {isAnalyzing ? (
                              <>
                                <Loader className="me-2 spin" size={16} />
                                Analyzing...
                              </>
                            ) : (
                              'Analyze Image'
                            )}
                          </button>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={resetValidation}
                          >
                            Choose Another
                          </button>
                        </div>
                      </div>
                    </div>

                    {isAnalyzing && (
                      <div className="alert alert-info">
                        <Loader className="me-2 spin" size={20} />
                        Processing your image with our AI model. This may take a few moments...
                      </div>
                    )}
                  </div>
                )}

                {results && (
                  <div className="fade-in">
                    <div className="alert alert-success d-flex align-items-center">
                      <CheckCircle className="me-2" size={24} />
                      <div>
                        <strong>Analysis Complete!</strong> Disease detected with high confidence.
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-header">
                            <h6 className="mb-0">Detection Results</h6>
                          </div>
                          <div className="card-body">
                            <div className="mb-3">
                              <strong>Detected Disease:</strong>
                              <div className="text-danger">{results.disease}</div>
                            </div>
                            <div className="mb-3">
                              <strong>Confidence Level:</strong>
                              <div className="text-success">{results.confidence}%</div>
                              <div className="progress mt-1">
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: `${results.confidence}%` }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <strong>Severity:</strong>
                              <div className="text-warning">{results.severity}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-header">
                            <h6 className="mb-0">Treatment Recommendations</h6>
                          </div>
                          <div className="card-body">
                            <ul className="list-unstyled mb-0">
                              {results.recommendations.map((rec, index) => (
                                <li key={index} className="mb-2">
                                  <CheckCircle className="text-success me-2" size={16} />
                                  {rec}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      <button
                        className="btn btn-primary me-2"
                        onClick={resetValidation}
                      >
                        Analyze Another Image
                      </button>
                      <button className="btn btn-outline-primary" onClick={handleDownloadReport}>
  Download Report
</button>

                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Validation;
