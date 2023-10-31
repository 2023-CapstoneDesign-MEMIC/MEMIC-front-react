import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AudioInputComponent = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (file) {
      // 서버로 파일 제출하는 로직을 여기에 구현합니다.
      // 예: axios.post('/api/upload', formData);
      // 파일 제출 후 RecordView 페이지로 이동
      //navigate('/record.html');
    } else {
      alert('오디오 파일을 선택해주세요.');
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AudioInputComponent;
