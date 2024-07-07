import React, { useState } from 'react';
import axios from 'axios';


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
    <div className="App">
    <h1>PDF QA System</h1>
    <input type="file" multiple onChange={handleFileChange} />
    <button onClick={handleUpload}>Upload Files</button>
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={handleQuestionSubmit}>Submit Question</button>
    </div>
    {answer && <div><h2>Answer:</h2><p>{answer}</p></div>}
  </div>
  )
}

export default App
