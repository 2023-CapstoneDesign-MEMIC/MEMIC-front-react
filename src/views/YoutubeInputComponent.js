import React, { useState } from 'react';
import axios from 'axios';
import './YouTubeComponent.css'; // CSS 파일을 임포트합니다.

const YouTubeComponent = () => {
  const [link, setLink] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleSubmit = async () => {
    if (link && start && end) {
      const formData = new FormData();
      formData.append('link', link);
      formData.append('start', start);
      formData.append('end', end);

      try {
        await axios.post('http://127.0.0.1:8000/fileupload/youtube', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('동영상 처리 요청을 보냈습니다.');
      } catch (error) {
        console.error('There was an error!', error);
      }
    } else {
      alert('모든 필드를 채워주세요.');
    }
  };

  return (
    <div className="container">
      <h2>YouTube Audio Spleeter</h2>
      <input
        className="input-field"
        type="text"
        value={link}
        onChange={handleLinkChange}
        placeholder="YouTube 링크"
      />
      <input
        className="input-field"
        type="text"
        value={start}
        onChange={handleStartChange}
        placeholder="시작 시간 (초)"
      />
      <input
        className="input-field"
        type="text"
        value={end}
        onChange={handleEndChange}
        placeholder="종료 시간 (초)"
      />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YouTubeComponent;
