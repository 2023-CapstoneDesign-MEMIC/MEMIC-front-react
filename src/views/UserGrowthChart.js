import React from 'react';
import { Bar } from 'react-chartjs-2';

const UserGrowthChart = () => {
  // 더미 데이터 생성
  const dummyScores = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
  // 점수대별로 HSL 색상을 할당하는 함수
  const getBarColor = (score) => {
    let hue;
    if (score >= 90) hue = 120; // 초록색
    else if (score >= 80) hue = 90; // 초록색과 노란색 사이
    else if (score >= 70) hue = 60; // 노란색
    else if (score >= 60) hue = 30; // 주황색
    else if (score >= 50) hue = 0; // 빨간색
    else hue = 360; // 진한 빨간색

    return `hsl(${hue}, 100%, 50%)`; // 채도 100%, 명도 50%로 고정
  };

  // 색상을 동적으로 할당하여 데이터셋에 적용
  const data = {
    labels: Array.from({ length: 50 }, (_, index) => `시도 ${index + 1}`),
    datasets: [
      {
        label: '성대모사 평균점수',
        data: dummyScores,
        backgroundColor: dummyScores.map(score => getBarColor(score)), // 각 점수에 대한 배경색 적용
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
    maintainAspectRatio: false,
  };

  // 그래프 컨테이너에 적용할 스타일
  const graphContainerStyle = {
    width: '100%',
    maxWidth: '100%',
    height: '300px', // 높이를 300px로 설정
    margin: '0 auto',
  };

  return (
    <div style={graphContainerStyle}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserGrowthChart;
