import React, { useState } from 'react';
import './AdditionalCommentButton.css';
import AudioPlayer from './AudioPlayer';

function AdditionalCommentButton({ endpoint, audioSrc }) { // audioSrc는 오디오 파일의 소스 URL
  const [showComment, setShowComment] = useState(false);
  const [startAudio, setStartAudio] = useState(0);
  const [commentDataM, setCommentDataM] = useState('');
  const [commentDataD, setCommentDataD] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setCommentDataM(data['1st_sentence_M']);
        setCommentDataD(data['1st_sentence_D']);
        setStartAudio(data['1st_time']);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const handleToggleComment = () => {
    setShowComment(!showComment);
    if (!showComment && !commentDataM && !commentDataD) {
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
            <img src={'./images/sSpin.gif'} alt="Loading..." />
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            // 피드백 내용 표시
              <div>
                <p className="af-class-heading-style-h6" style={{ fontWeight : 'bold'}}>{commentDataM}</p>
                <br></br>
                <p style={{ whiteSpace: 'pre-wrap' }}>{commentDataD}</p>
              </div>
          )}
          <AudioPlayer src={audioSrc = './images/sourceVocal.wav'} start = {startAudio} />
          <AudioPlayer src={audioSrc = './images/userVocal.wav'} start = {startAudio} />
        </div>
      )}
    </div>
  );
}
export default AdditionalCommentButton;
