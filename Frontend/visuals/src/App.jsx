import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const [files, setFiles] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };
  

  return (
    <>
      
     
    </>
  )
}

export default App
