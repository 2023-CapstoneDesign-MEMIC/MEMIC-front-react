import React, { useState } from 'react';
import './AdditionalCommentButton.css';

function AdditionalCommentButton({ endpoint }) {
  const [showComment, setShowComment] = useState(false);
  const [commentData, setCommentData] = useState('');
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
        setCommentData(data.comment); // 서버 응답에 따라 경로 조정 필요
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
            // 로딩 인디케이터 (예: 스피너) 표시
            <p>Loading...</p>
          ) : error ? (
            // 에러 메시지 표시
            <p className="error">{error}</p>
          ) : (
            // 피드백 내용 표시
            <p>{commentData}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AdditionalCommentButton;
