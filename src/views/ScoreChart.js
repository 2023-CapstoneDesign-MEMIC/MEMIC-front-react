import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import Chart from 'chart.js/auto';

const ScoreChart = ({ score }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedScore((prevAnimatedScore) => {
        const scoreDiff = score - prevAnimatedScore;
        if (scoreDiff <= 0) {
          clearInterval(interval);
          return score;
        }
        return Math.min(prevAnimatedScore + Math.ceil(scoreDiff * 0.1), score);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [score]);

  const data = {
    labels: ['Score'],
    datasets: [
      {
        label: 'Score',
        data: [animatedScore],
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100  // 점수 최대치를 100으로 설정
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.3,
        to: 0,
        loop: true
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default ScoreChart;
