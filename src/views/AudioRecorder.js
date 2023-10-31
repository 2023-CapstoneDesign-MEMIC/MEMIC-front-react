import React, { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = handleDataAvailable;
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setAudioURL(''); // 녹음 시작 전에 이전 오디오 URL을 초기화
    } catch (err) {
      console.error('Error starting recording', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      setHasRecorded(true); // 녹음이 한 번 이루어졌음을 표시
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioURL(URL.createObjectURL(event.data));
    }
  };

  const submitRecording = () => {
    // 백엔드로 녹음 파일을 제출하는 로직
    console.log('Submitting the recording...');
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted && (
        <>
          <button onClick={isRecording ? stopRecording : startRecording}>
            {isRecording ? 'Stop Recording' : hasRecorded ? 'Re-Recording' : 'Start Recording'}
          </button>
          {audioURL && (
            <>
              <audio src={audioURL} controls />
              <button onClick={submitRecording}>Submit Recording</button>
            </>
          )}
        </>
      )}
      {isSubmitted && (
        <p style={{ color: 'green' }}>Your recording has been submitted. <br/> Now let’s move on to the result report page!</p>
      )}
    </div>
  );
};

export default AudioRecorder;
