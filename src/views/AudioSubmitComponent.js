import React, { useState } from 'react';
import axios from 'axios';
import './AudioSubmitComponent.css'
const AudioSubmitComponent = () => {
  const [recordings, setRecordings] = useState([]); // 녹음 파일 목록
  const [selectedRecording, setSelectedRecording] = useState(''); // 선택된 녹음 파일
  const [start, setStart] = useState(''); // 시작 시간
  const [end, setEnd] = useState(''); // 종료 시간
  // 재생할 오디오 파일의 URL을 저장할 새로운 상태
  const [audioPreviewUrl, setAudioPreviewUrl] = useState(null);
  const [audioPlayerVisible, setAudioPlayerVisible] = useState({});

  // 라디오 버튼 클릭 핸들러
  const handleRecordingChange = (event) => {
    const { value, dataset } = event.target;
    setSelectedRecording(value);
    setAudioPreviewUrl(dataset.url);
    setAudioPlayerVisible(prevState => ({
      ...prevState,
      [value]: !prevState[value]
    }));
  };

  // 더미 데이터를 사용한 녹음 파일 목록 초기화 (실제로는 서버에서 가져올 수 있음)
  useState(() => {
    setRecordings([
      // { id: 1, name: 'Recording 1.mp3', url: 'path/to/recording1.mp3' },
      // { id: 2, name: 'Recording 2.mp3', url: 'path/to/recording2.mp3' },
      { id: 1, name: 'Sample_Vocal_1.mp3', url: '/sample/userVocal.wav' },
      { id: 2, name: 'Sample_Vocal_2.mp3', url: '/sample/sourceVocal.wav' },
      // ... 기타 녹음 파일 ...
    ]);
  }, []);

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedRecording && start && end) {
      const formData = new FormData();
      formData.append('recording', selectedRecording);
      formData.append('start', start);
      formData.append('end', end);

      try {
        const response = await axios.post('http://127.0.0.1:8000/submit/', formData);
        console.log(response.data); // 서버 응답 출력
        // 추가 작업: 제출 성공 메시지 표시, 페이지 이동 등
      } catch (error) {
        console.error('There was an error!', error);
      }
    } else {
      alert('녹음 파일을 선택해주세요!');
    }
  };

  return (
    <div className="audio-submit-container">
      {recordings.map((recording) => (
        <div key={recording.id} className="recording-item">
          <label htmlFor={`recording-${recording.id}`} className="recording-label1">
            <input
              type="radio"
              id={`recording-${recording.id}`}
              name="recording"
              value={recording.name}
              data-url={recording.url}
              onChange={handleRecordingChange}
              checked={selectedRecording === recording.name}
              className="input-hidden"
            />
            {recording.name}
          </label>
          {/* 오디오 플레이어 토글 */}
          {audioPlayerVisible[recording.name] && (
            <audio controls src={recording.url} className="audio-player1">
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
      <button onClick={handleSubmit} className="af-class-button af-class-is-secondary w-button">제출하기</button>
    </div>
  );
};

export default AudioSubmitComponent;
