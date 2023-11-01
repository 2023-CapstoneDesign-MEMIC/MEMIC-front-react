import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AudioInputComponent = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false); // 제출 상태 추가
  const navigate = useNavigate();

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
      formData.append('imgfile', file);

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      {submitted ? (
        <div style={{ color: 'green' }}>Your Submit has successfully finished! Let's move on to Record page!</div>
      ) : (
        <>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목"
            style={{ width: '300px' }}
          />
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="내용"
            style={{ width: '300px', height: '100px' }}
          />
          <input
            type="file"
            accept=".mp3,.wav,.flac,.aac"
            onChange={handleFileChange}
            style={{ width: '300px' }}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default AudioInputComponent;
