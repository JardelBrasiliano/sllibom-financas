import React from 'react';

import { Bar } from '@reactchartjs/react-chart.js';

const VerticalBar = () => {
  const mocData = [
    { date: 'jan', value: 60 },
    { date: 'fev', value: 70 },
    { date: 'mar', value: 100 },
    { date: 'abr', value: 250 },
    { date: 'maio', value: 150 },
    { date: 'jun', value: 230 },
    { date: 'jul', value: 30 },
    { date: 'ago', value: 250 },
    { date: 'set', value: 150 },
    { date: 'out', value: 230 },
    { date: 'nov', value: 30 },
    { date: 'dez', value: 30 },
  ];

  const data = {
    labels: [
      mocData[0].date,
      mocData[1].date,
      mocData[2].date,
      mocData[3].date,
      mocData[4].date,
      mocData[5].date,
      mocData[6].date,
      mocData[7].date,
      mocData[8].date,
      mocData[9].date,
      mocData[10].date,
      mocData[11].date,
    ],
    datasets: [
      {
        label: 'receita',
        data: [
          mocData[0].value,
          mocData[1].value,
          mocData[2].value,
          mocData[3].value,
          mocData[4].value,
          mocData[5].value,
          mocData[6].value,
          mocData[7].value,
          mocData[8].value,
          mocData[9].value,
          mocData[10].value,
          mocData[11].value,
        ],
        backgroundColor: [
          'rgba(148, 21, 249, 0.4)',
          'rgba(249, 130, 21, 0.4)',
          'rgba(21, 44, 249, 0.4)',
          'rgba(249, 21, 21, 0.4)',
          'rgba(230, 249, 21, 0.4)',
          'rgba(249, 21, 198, 0.4)',
          'rgba(77, 250, 34, 0.4)',
          'rgba(21, 221, 249, 0.4)',
          'rgba(249, 21, 75, 0.4)',
          'rgba(21, 249, 85, 0.4)',
          'rgba(249, 21, 157, 0.4)',
          'rgba(65, 36, 245, 0.4)',
        ],
        borderColor: [
          'rgba(148, 21, 249, 1)',
          'rgba(249, 130, 21, 1)',
          'rgba(21, 44, 249, 1)',
          'rgba(249, 21, 21, 1)',
          'rgba(230, 249, 21, 1)',
          'rgba(249, 21, 198, 1)',
          'rgba(77, 250, 34, 1)',
          'rgba(21, 221, 249, 1)',
          'rgba(249, 21, 75, 1)',
          'rgba(21, 249, 85, 1)',
          'rgba(249, 21, 157, 1)',
          'rgba(65, 36, 245, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default VerticalBar;
