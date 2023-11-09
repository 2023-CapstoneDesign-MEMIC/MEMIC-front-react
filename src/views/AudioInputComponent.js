import React, { useState } from 'react';
import axios from 'axios';
import './AudioInputComponent.css'

const AudioInputComponent = () => {
  const [file, setFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null); // 오디오 URL 상태
  const [start, setStart] = useState(''); // 시작 시간 상태
  const [end, setEnd] = useState(''); // 종료 시간 상태
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setAudioUrl(url);
    } else {
      setAudioUrl(null); // 파일이 선택되지 않았을 때 audioUrl 상태를 null로 설정
    }
  };

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleSubmit = async () => {
    if (file && start && end) {
      const formData = new FormData();
      formData.append('audiofile', file);
      formData.append('start', start);
      formData.append('end', end);

      try {
        const response = await axios.post('http://127.0.0.1:8000/fileupload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data); // 백엔드 응답 로깅
        setSubmitted(true);
      } catch (error) {
        console.error('There was an error!', error);
      }
    } else {
      alert('모든 필드를 채워주세요.');
    }
  };

  return (
    <div className="AudioInputComponent-container">
      {/* 제출 후 메시지 또는 입력 필드 표시 */}
      {submitted ? (
        <div className="AudioInputComponent-successMessage">Your submission has been successfully processed!</div>
      ) : (
        <>
          {audioUrl && (
            <>
              <audio controls src={audioUrl} className="AudioInputComponent-audioPlayer">
                Your browser does not support the audio element.
              </audio>
              <div className="AudioInputComponent-time-inputs">
                <input
                  type="text"
                  value={start}
                  onChange={handleStartChange}
                  placeholder="시작 시간 (초)"
                  className="AudioInputComponent-input"
                />
                <input
                  type="text"
                  value={end}
                  onChange={handleEndChange}
                  placeholder="종료 시간 (초)"
                  className="AudioInputComponent-input"
                />
              </div>
            </>
          )}
          <input
            type="file"
            accept=".mp3,.wav,.flac,.aac"
            onChange={handleFileChange}
            className="AudioInputComponent-input"
          />
          <div className="af-class-text-size-tiny">[file format] .mp3,.wav,.flac,.aac</div>
          <button onClick={handleSubmit} className="af-class-button af-class-is-secondary af-class-is-small w-button">Submit</button>
        </>
      )}
    </div>
  );
};

export default AudioInputComponent;
