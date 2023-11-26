import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './AudioRecorder.css';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const mediaRecorderRef = useRef(null);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      // Initialize canvas and audio context only when recording
      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext('2d');
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }
    return () => {
      // 컴포넌트 언마운트 시 애니메이션 취소
      cancelAnimationFrame(animationRef.current);
    };
  }, [isRecording]);

    const draw = () => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    analyser.getByteTimeDomainData(dataArray);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'rgb(0, 225, 0)';
    canvasContext.beginPath();

    const sliceWidth = canvas.width * 1.0 / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * canvas.height / 2;

      if (i === 0) {
        canvasContext.moveTo(x, y);
      } else {
        canvasContext.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasContext.lineTo(canvas.width, canvas.height / 2);
    canvasContext.stroke();

    animationRef.current = requestAnimationFrame(draw);
  };

  const startVisualization = (stream) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }

    analyserRef.current = audioContextRef.current.createAnalyser();
    const source = audioContextRef.current.createMediaStreamSource(stream);
    source.connect(analyserRef.current);

    analyserRef.current.fftSize = 2048;
    draw();
  };

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
    startVisualization(mediaRecorderRef.current.stream); // 시각화 시작
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
      formData.append('audio_file', audioBlob, 'recording.mp3');

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
      {isRecording && (
        <canvas ref={canvasRef} width="400" height="150" className="AudioRecorder-canvas" />
      )}
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
