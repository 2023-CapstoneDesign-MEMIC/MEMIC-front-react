import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AudioInputComponent.css'

const AudioInputComponent = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false); // 제출 상태 추가
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("샘플 문구");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };


  const handleSubmit = async () => {
    if (file && title && content) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('audiofile', file);

      try {
        await axios.post('http://127.0.0.1:8000/fileupload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setSubmitted(true); // 제출 상태를 true로 변경
        //navigate('/record.html');
      } catch (error) {
        console.error('There was an error!', error);
      }
    } else {
      alert('모든 필드를 채워주세요.');
    }
  };

  return (
    <div className="AudioInputComponent-container">
      {submitted ? (
        <div className="AudioInputComponent-successMessage">Your Submit has successfully finished! Let's move on to Record page!</div>
      ) : (
        <>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="파일 제목"
            className="AudioInputComponent-input" // Added class name
          />
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="파일 내용"
            className="AudioInputComponent-textarea" // Added class name
          />
          <input
            type="file"
            accept=".mp3,.wav,.flac,.aac"
            onChange={handleFileChange}
            className="AudioInputComponent-input" // Reused input class name for styling
          />
          <button onClick={handleSubmit} className="af-class-button af-class-is-small w-button">Submit</button>
        </>
      )}
    </div>
  );
};

export default AudioInputComponent;
