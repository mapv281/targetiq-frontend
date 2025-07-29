// 📱 TargetIQ Frontend - Upload Interface (React + Tailwind)

import React, { useState } from 'react';
import axios from 'axios';

export default function UploadTarget() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('https://targetiq-backend.onrender.com/upload', formData);
      setResult(res.data);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎯 Upload Your Target</h1>

      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Analyze Target'}
      </button>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🔍 Results</h2>
          <p><strong>Total Shots:</strong> {result.total_shots}</p>
          <p><strong>X Ring:</strong> {result.x_ring}</p>
          <p><strong>10 Ring:</strong> {result.ten_ring}</p>
          <p><strong>9 Ring:</strong> {result.nine_ring}</p>
          <p><strong>Other Hits:</strong> {result.other_hits}</p>

          <div className="mt-2">
            <strong>Coaching Tips:</strong>
            <ul className="list-disc list-inside">
              {result.suggestions.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
