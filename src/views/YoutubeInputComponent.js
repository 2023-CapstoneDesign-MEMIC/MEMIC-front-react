import React, { useState } from 'react';
import axios from 'axios';
import './YouTubeComponent.css'; // CSS 파일을 임포트합니다.

const YouTubeComponent = () => {
  const [link, setLink] = useState('');
  const [videoId, setVideoId] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleLinkChange = (event) => {
    const url = event.target.value;
    setLink(url);

    // URL이 변경되면 videoId 상태를 업데이트합니다.
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\s]{11})/i);
    setVideoId(videoIdMatch ? videoIdMatch[1] : '');
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
      <h4>Audio Spleeter</h4>
      <input
        className="input-field"
        type="text"
        value={link}
        onChange={handleLinkChange}
        placeholder="YouTube 링크"
      />
      {/* YouTube 영상 미리보기 */}
      {videoId && (
        <iframe title="YouTube video player" // 고유한 title 속성 추가
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen className="youtube-iframe"
        ></iframe>
      )}
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
      <button className="af-class-button af-class-is-small w-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YouTubeComponent;
