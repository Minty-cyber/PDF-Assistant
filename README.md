
https://github.com/user-attachments/assets/fbf8e8dd-47f3-40dc-844d-d3d63b98d970

# PDF Assistant🤖📓🌐

![Beta Version](https://img.shields.io/badge/version-beta-yellow)
![GitHub last commit](https://img.shields.io/github/last-commit/Minty-cyber/LC)
![GitHub issues](https://img.shields.io/github/issues/Minty-cyber/LC)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Minty-cyber/LC)

> **Note:** This project is currently in beta. Future versions will include more features and improvements. STAY TUNED!


## Introduction 🚀

 📖 **PDF Assistant** is a project designed to enhance learners' productivity and efficiency. It allows users to upload a PDF document and generate questions based on its content. Users can then interact with the system to get accurate answers to these questions, aiding in better comprehension and retention.

## Features

- ✨**PDF Upload:** Upload PDF documents for processing
- ✨**Question Submission:** Type questions based on the uploaded PDF.
- ✨**Answer Retrieval:** Provide accurate answers to typed questions.
- ✨**User Interaction:** Easy-to-use interface for interacting with generated questions and answers.


By leveraging **PDF Assistant**, users can streamline their learning process by focusing on key concepts and testing their understanding directly from PDF materials.


## Technologies Used 🛠️

- **LangChain**: Used for language processing and AI/ML tasks by handling the user and pdf interactions.
- **FastAPI**: Backend framework for building APIs. Used for making the routes of uploading and asking questions
- **React Vite**: Frontend framework for building user interfaces.
- **Postman**: For testing the API built with FastAPI. This is optional but it is recommended for proper testing.

### Prerequisites 📋

- Node.js and npm
- Python and pip
- FastAPI
- Vite


### Backend Setup 🔧

1. Clone the repository:

   ```bash
   git clone https://github.com/Minty-cyber/PDF-Assistant.git
   cd Backend
2. Install the python dependencies:

   ```bash
   pip install -r requirements.txt
3. Run the FastAPI server:
   
    ```bash
   uvicorn main:app --reload
4. Access the API documentation:
   Once the server is running, you can access the API documentation at:

   ```bash
   http://localhost:8000/docs

## Gemini API KEY 🔑

To use the PDF Assistant effectively, you will need to configure the Gemini API Key for accessing Google Generative AI services. Follow these steps to set it up:

1. **Obtain API Key**:
   - Visit the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing project.
   - Navigate to the "APIs & Services" section.
   - Enable the "Google Generative AI" API.
   - Generate a new API key and note it down.

2. **Set Environment Variable**:
   - Create a `.env` file in the root directory of your project.
   - Add your API key to the `.env` file as follows:
     ```dotenv
     GOOGLE_API_KEY=your_api_key_here
     ```
   - Make sure to replace `your_api_key_here` with the actual API key you obtained from Google Cloud Console.

3. **Load Environment Variables**:
   - Ensure your FastAPI application is configured to load the environment variables from the `.env` file. This is typically done using the `dotenv` package in Python:
     ```python
     from dotenv import load_dotenv
     import os

     load_dotenv()
     genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
     ```

4. **Security Considerations**:
   - Never hard-code your API keys directly in your source code.
   - Avoid sharing your API keys in public repositories.
   - Rotate your API keys regularly and manage their permissions carefully.

By following these steps, you can securely configure and use the Gemini API key with the PDF Assistant to 
leverage the powerful language processing capabilities of Google Generative AI.


### API endpoints with Postman snapshots
<p align="center">
      <img src="Backend/Images/Screenshot (288).png" width="400" height="250">
      <img src="Backend/Images/Screenshot (287).png" width="400" height="250">
</p>

## Frontend Setup 🌐

1. **Navigate to the frontend directory**:

   ```python
   cd Frontend/visuals

2. **Install Node.js dependencies**:

   ```python
   npm install
   npm install axios
   npm install vite

3. **Start the development server**:
   This command will start the React Vite development server.
      
   ```python
   npm run dev

4. **Access the application**:
   Open your browser and go to:

    ```python
   http://localhost:3000

## Contributions 🤝
Contributions are welcome! Please follow the [contribution guidelines](https://github.com/Minty-cyber/PDF-Assistant/blob/main/CONTRIBUTIONS.md) to get started.
