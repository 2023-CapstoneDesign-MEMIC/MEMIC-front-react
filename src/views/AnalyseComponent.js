import React, { useState } from 'react';
import './AnalyseComponent.css'; // 스타일 시트를 가져옵니다.
import ScoreChart from './ScoreChart';

const FeedbackReport = ({ data }) => {
  const [showReferenceAudio, setShowReferenceAudio] = useState(false);
  const [showUserAudio, setShowUserAudio] = useState(false);
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
      <h2 className="title">전체 점수</h2>
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
  const randomScore = Math.floor(Math.random() * 100);

  const dummyData = {
    score: randomScore, // 랜덤 스코어 사용
    audioLinks: {
      reference: 'audio/reference_voice.wav',
      user: 'audio/user_voice.wav'
    }
  };

  return <FeedbackReport data={dummyData} />;
};

export default AnalyseComponent;
