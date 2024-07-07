import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; 

function App() {
  const [files, setFiles] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    await axios.post("http://localhost:8000/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    alert("Files uploaded and processed successfully!");
  };

  const handleQuestionSubmit = async () => {
    const response = await axios.post("http://localhost:8000/ask/", { question });
    setAnswer(response.data.answer);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">PDF QA System</h1>
        <input type="file" multiple onChange={handleFileChange} className="mb-4" />
        <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Upload Files
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <button
            onClick={handleQuestionSubmit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 ml-2 rounded-md"
          >
            Submit Question
          </button>
        </div>
        {answer && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Answer:</h2>
            <p>{answer}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
