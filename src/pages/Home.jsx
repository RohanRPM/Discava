import { useState } from "react";
import axios from "axios";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [detectionResult, setDetectionResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:4000/detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setDetectionResult(response.data);
      setError(null);
    } catch (error) {
      console.error('Error uploading image:', error.response ? error.response.data : error.message);
      setError('Error uploading image');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload and Detect</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {detectionResult && (
        <div>
          <h3>Detection Result:</h3>
          <pre>{JSON.stringify(detectionResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Home;
