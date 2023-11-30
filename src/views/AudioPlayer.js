import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';
const AudioPlayer = ({ src , start }) => {
  const [isSectionRepeatOn, setIsSectionRepeatOn] = useState(false);
  const [startTime, setStartTime] = useState(start);
  const [endTime, setEndTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // 오디오 메타 데이터 로드 시, 종료 시간 설정
    const setAudioMetadata = () => {
      setEndTime(audioRef.current.duration);
    };

    const audio = audioRef.current;
    audio.addEventListener('loadedmetadata', setAudioMetadata);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioMetadata);
    };
  }, []);

  useEffect(() => {
    setStartTime(start); // start prop이 변경될 때 startTime 상태 업데이트
  }, [start]);

  useEffect(() => {
    const audio = audioRef.current;
    const checkTime = () => {
      if (isSectionRepeatOn && audio.currentTime >= endTime) {
        audio.currentTime = startTime;
        audio.play();
      }
    };

    audio.addEventListener('timeupdate', checkTime);
    return () => audio.removeEventListener('timeupdate', checkTime);
  }, [isSectionRepeatOn, startTime, endTime]);

  const handleStartTimeChange = (e) => {
    const newStartTime = parseFloat(e.target.value);
    if (newStartTime >= 0 && newStartTime < endTime) {
      setStartTime(newStartTime);
    } else {
      alert("올바른 시작 시간을 입력해주세요. 시작 시간은 0보다 크거나 같고, 종료 시간보다 작아야 합니다.");
    }
  };

  const handleEndTimeChange = (e) => {
    const newEndTime = parseFloat(e.target.value);
    if (newEndTime > startTime && newEndTime <= audioRef.current.duration) {
      setEndTime(newEndTime);
    } else {
      alert("올바른 종료 시간을 입력해주세요. 종료 시간은 시작 시간보다 커야 하고, 오디오의 총 길이를 넘어서는 안됩니다.");
    }
  };

  const toggleRepeat = () => {
    setIsSectionRepeatOn(!isSectionRepeatOn);
    if (!isSectionRepeatOn) {
      audioRef.current.currentTime = startTime;
      audioRef.current.play();
    }
  };

  return (
    <div className="audio-player-container">
      <audio className="audio-player" ref={audioRef} controls src={src}></audio>
      <div className="control-group">
        <label>
          시작 시간:
          <input className="audio-input" type="number" value={startTime} onChange={handleStartTimeChange} min="0" step="0.01" />
        </label>
        <label>
          종료 시간:
          <input className="audio-input" type="number" value={endTime} onChange={handleEndTimeChange} min="0" step="0.01" />
        </label>
      </div>
      <button className="audio-button" onClick={toggleRepeat}>
        {isSectionRepeatOn ? "구간반복 ON" : "구간반복 OFF"}
      </button>
    </div>
  );
};

export default AudioPlayer;
