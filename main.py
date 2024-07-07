import streamlit as st
from PyPDF2 import PdfReader
#After reading the pdf, convert it to vectors
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os

from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as generativeai
from langchain.vectorstores import FAISS
from langchain_google_genai import  ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv