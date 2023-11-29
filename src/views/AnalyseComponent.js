import React, { useState, useEffect } from 'react';
import './AnalyseComponent.css';
import ScoreChart from './ScoreChart';

const FeedbackReport = ({ data }) => {
  const [showReferenceAudio, setShowReferenceAudio] = useState(false);
  const [showUserAudio, setShowUserAudio] = useState(false);
  // eslint-disable-next-line
  const [detailVisible, setDetailVisible] = useState(false);


  // 오디오 플레이어 토글 함수
  const toggleAudioPlayer = (playerType) => {
    if (playerType === 'reference') {
      setShowReferenceAudio(!showReferenceAudio);
      setShowUserAudio(false);
    } else if (playerType === 'user') {
      setShowUserAudio(!showUserAudio);
      setShowReferenceAudio(false);
    }
  };

  // 성대모사 점수에 따른 멘트를 결정하는 함수
  const getFeedbackMessage = (score) => {
    if (score >= 90) {
      return "완벽에 가깝습니다! 당신은 성대모사의 달인!";
    } else if (score >= 80) {
      return "매우 훌륭해요! 조금만 더 연습한다면 완벽한 성대모사가 가능할 거예요.";
    } else if (score >= 70) {
      return "좋은 시도예요! 일부 발음과 감정 표현에 조금 더 주의를 기울이면 좋겠어요.";
    } else if (score >= 60) {
      return "잘 따라하고 있어요, 하지만 명확한 발음과 감정을 담아 더 연습해야 해요.";
    } else if (score >= 50) {
      return "발음과 감정을 더 잘 캐치해 보세요. 꾸준한 노력이 필요해요!";
    } else {
      return "아직 많은 연습이 필요해요. 원본과 비교하며 발음과 감정을 연습해 봅시다.";
    }
  };

  const feedbackMessage = getFeedbackMessage(data.score);
  // 점수에 따른 차트를 렌더링하는 부분
  const scoreChart = <ScoreChart score={data.score} />;

  return (
    <div className="report-container">
      <h3 className="title">전체 유사도</h3>
      <p className="score">{data.score}%</p>
      {scoreChart}
      {/* 점수에 따른 멘트 표시 */}
      <p className="recommendation">{feedbackMessage}</p>
      <div className="detail-section">
        <div className="buttons-container">
          <button className="af-class-button af-class-is-secondary w-button" onClick={() => toggleAudioPlayer('reference')}>
            따라하려는 음성 듣기
          </button>
          <button className="af-class-button af-class-is-secondary w-button" onClick={() => toggleAudioPlayer('user')}>
            내 목소리 듣기
          </button>
          <button className="af-class-button af-class-is-secondary w-button" onClick={() => window.location.href = 'http://localhost:3000/record'}>
            다시 녹음하기
          </button>
        </div>

        {showReferenceAudio && (
          <div className="audio-player-wrapper">
            <audio className="audio-player" controls src={data.audioLinks.reference}></audio>
          </div>
        )}
        {showUserAudio && (
          <div className="audio-player-wrapper">
            <audio className="audio-player" controls src={data.audioLinks.user}></audio>
          </div>
        )}
      </div>
    </div>
  );
};

const AnalyseComponent = () => {
  // 랜덤 스코어 생성
  // const randomScore = Math.floor(Math.random() * 100);
  // const dummyData = {
  //   score: randomScore, // 랜덤 스코어 사용
  //   audioLinks: {
  //     reference: 'audio/reference_voice.wav',
  //     user: 'audio/user_voice.wav'
  //   }
  // };
  const [data, setData] = useState(null);

  useEffect(() => {
    // 데이터 가져오기
    fetch('http://127.0.0.1:8000/analyse/',{
    method: 'GET', // 또는 'POST'
    mode: 'cors', // CORS 모드 사용
    headers: {
      'Content-Type': 'application/json',
      // 필요한 경우 추가 헤더를 여기에 추가
    },
  }) // 장고 백엔드 URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // JSON 데이터 중 similarity 값을 사용하여 data 상태 업데이트
        setData({
          score: data['similarity'],
          audioLinks: {
            reference: '/images/userVocal.wav', // 필요에 따라 조정
            user: '/images/sourceVocal.wav' // 필요에 따라 조정
          }
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  // 데이터 로딩 중 표시
  if (!data) {
    return <div>Loading...</div>;
  }
  return <FeedbackReport data={data} />;
};

export default AnalyseComponent;
