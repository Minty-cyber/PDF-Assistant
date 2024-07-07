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
    <>
      
     
    </>
  )
}

export default App
