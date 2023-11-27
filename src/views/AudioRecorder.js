import React, { useState, useRef } from 'react';
import axios from 'axios';
import './AudioRecorder.css';

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

  const submitRecording = async () => {
    if (!audioURL) {
      alert('Please record an audio first.');
      return;
    }

    try {
      const audioBlob = await fetch(audioURL).then(r => r.blob());
      const formData = new FormData();
      formData.append('audio_file', audioBlob, 'recording.wav');

      const response = await axios.post('http://127.0.0.1:8000/record/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        console.log('Submitted the recording:', response.data);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('There was an error submitting the recording:', error);
    }
  };

  return (
    <div className="AudioRecorder">
      {!isSubmitted && (
        <>
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className="af-class-button af-class-is-small w-button"
          >
            {isRecording ? '성대모사 끝내기' : hasRecorded ? '다시하기' : '성대모사 시작'}
          </button>
          {audioURL && (
            <>
              <audio src={audioURL} controls className="AudioRecorder-audio" />
              <button
                onClick={submitRecording}
                className="af-class-button af-class-is-small w-button"
              >
                제출하기
              </button>
            </>
          )}
        </>
      )}
      {isSubmitted && (
        <p className="AudioRecorder-confirmation">
          Your recording has been submitted. <br/> Now let’s move on to the result report page!
        </p>
      )}
    </div>
  );
};


export default AudioRecorder;
