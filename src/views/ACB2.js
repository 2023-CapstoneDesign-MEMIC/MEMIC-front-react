import React, { useState } from 'react';
import './AdditionalCommentButton.css';
import AudioPlayer from './AudioPlayer';

function ACB2({ endpoint, audioSrc }) { // audioSrc는 오디오 파일의 소스 URL
  const [showComment, setShowComment] = useState(false);
  const [commentData, setCommentData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [audioStartTime, setAudioStartTime] = useState(0); // 오디오 시작 시간 상태

  const fetchComment = () => {
    setError(null); // 에러 상태 초기화
    setIsLoading(true);

    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCommentData(data['2nd_sentence']);
        // setAudioStartTime(data['2nd_time']); // 오디오 시작 시간 설정
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const handleToggleComment = () => {
    setShowComment(!showComment);
    if (!showComment && !commentData) {
      fetchComment();
    }
  };

  return (
    <div>
      <button onClick={handleToggleComment} className="af-class-button af-class-is-secondary w-button">
        상세보기
      </button>
      {showComment && (
        <div className="additional-comment">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            // 피드백 내용 표시
            <p>{commentData}</p>

          )}
          <AudioPlayer src={audioSrc = './images/sourceVocal.wav'} />
          {/*<AudioPlayer src={audioSrc = './images/sourceVocal.wav'} initialStartTime={audioStartTime}/>*/}
        </div>
      )}
    </div>
  );
}
export default ACB2;
