import React from 'react';
import './AnalyseComponent.css'; // 스타일 시트를 가져옵니다.

const FeedbackReport = ({ data }) => (
  <div className="report-container">
    <h2 className="title">Analysis Score</h2>
    <p className="score">{data.score}%</p>
    <p className="recommendation">
      To improve your score, focus on the pronunciation of plosives such as /ㅂ/, /ㅃ/, /ㅍ/.
    </p>
    <div className="detail-section">
      <h3 className="title">Details</h3>
      <p className="recommendation">
        The target voice features a characteristic frequency range between 1,000 to 2,400 Hz.
        These frequencies correspond to the pronunciation of the Korean plosives /ㅂ/, /ㅃ/, /ㅍ/.
        Listen to the sections again and try to pronounce them more accurately.
      </p>
      <label>Listen to Reference Voice</label>
      <audio className="audio-player" controls src={data.audioLinks.reference}></audio>
      <label>Listen to Your Voice</label>
      <audio className="audio-player" controls src={data.audioLinks.user}></audio>
      <button className="button" onClick={() => alert('Try again!')}>Try Again</button>
    </div>
  </div>
);

const AnalyseComponent = () => {
  const dummyData = {
    score: 85,
    audioLinks: {
      reference: 'audio/reference_voice.wav',
      user: 'audio/user_voice.wav'
    }
  };

  return <FeedbackReport data={dummyData} />;
};

export default AnalyseComponent;
