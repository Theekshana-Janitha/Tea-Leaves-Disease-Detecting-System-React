import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/imageUpload.css'; // Import the separate CSS file for styling

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [predictions, setPredictions] = useState([]); // Store predictions from the server
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setPredictions([]);  // Reset predictions on new file select
        setError("");
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);  // Match with Flask backend key

        try {
            const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Handle response and set predictions or error message
            if (response.data.predictions) {
                setPredictions(response.data.predictions); // Store predictions
                setError(""); // Clear error if predictions are available
            } else if (response.data.error) {
                setError(response.data.error); // Set error message
            } else {
                setError('Unexpected response from the server');
            }
        } catch (error) {
            console.error('Error uploading the image', error);
            // Use a more specific message for network-related errors
            setError(error.response?.data?.error || 'Error uploading the image');
        }
    };

    const getMainPrediction = () => {
        if (predictions.length === 0) return null;
        return predictions.reduce((prev, current) => (prev.confidence > current.confidence) ? prev : current);
    };

    const getAdditionalPredictions = () => {
        const mainPrediction = getMainPrediction();
        return predictions.filter(pred => pred !== mainPrediction);
    };

    return (
        <div className="image-upload-container">
            <div className="upload-section">
                <h2>Upload Your Tea Leaf Image</h2>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button onClick={handleUpload} className="upload-button">Upload</button>

                {/* Display error message */}
                {error && <div className="error-message">{error}</div>}
                
                {/* Display image preview if available */}
                {selectedFile && (
                    <div className="image-preview">
                        <h3>Preview:</h3>
                        <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" className="preview-image" />
                    </div>
                )}
            </div>

            <div className="results-section">
                {/* Display main prediction if available */}
                {predictions.length > 0 && (
                    <div className="predictions-section">
                        <h3>Main Prediction:</h3>
                        {(() => {
                            const mainPrediction = getMainPrediction();
                            return (
                                <div className="prediction-card">
                                    <strong>Class:</strong> {mainPrediction.class}<br />
                                    <strong>Confidence:</strong> {(mainPrediction.confidence * 100).toFixed(2)}%<br />
                                    <strong>Bounding Box:</strong> {mainPrediction.bbox.join(', ')}
                                </div>
                            );
                        })()}
                    </div>
                )}

                {/* Display additional predictions if available */}
                {getAdditionalPredictions().length > 0 && (
                    <div className="predictions-section">
                        <h3>Additional Predictions:</h3>
                        <ul className="additional-predictions">
                            {getAdditionalPredictions().map((prediction, index) => (
                                <li key={index} className="additional-prediction-item">
                                    <strong>Class:</strong> {prediction.class}<br />
                                    <strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(2)}%<br />
                                    <strong>Bounding Box:</strong> {prediction.bbox.join(', ')}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageUpload;
