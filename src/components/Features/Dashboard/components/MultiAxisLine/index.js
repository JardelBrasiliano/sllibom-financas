import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';

const MultiAxisLine = () => {
  const mocData = [
    { date: 'seg', value: 60 },
    { date: 'ter', value: 70 },
    { date: 'quar', value: 100 },
    { date: 'quint', value: 250 },
    { date: 'sext', value: 150 },
    { date: 'sáb', value: 230 },
    { date: 'dom', value: 30 },
  ];
  const mocData2 = [
    { date: '20/01/2021', value: 90 },
    { date: '21/01/2021', value: 70 },
    { date: '22/01/2021', value: 150 },
    { date: '23/01/2021', value: 150 },
    { date: '24/01/2021', value: 50 },
    { date: '25/01/2021', value: 130 },
    { date: '26/01/2021', value: 90 },
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
    ],
    datasets: [
      {
        label: 'Receita',
        data: [
          mocData[0].value,
          mocData[1].value,
          mocData[2].value,
          mocData[3].value,
          mocData[4].value,
          mocData[5].value,
          mocData[6].value,
        ],
        fill: false,
        backgroundColor: 'rgba(21, 249, 44,1)',
        borderColor: 'rgba(21, 249, 44, 0.88)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Despesa',
        data: [
          mocData2[0].value,
          mocData2[1].value,
          mocData2[2].value,
          mocData2[3].value,
          mocData2[4].value,
          mocData2[5].value,
          mocData2[6].value,
        ],
        fill: false,
        backgroundColor: 'rgba(249, 48, 21, 1)',
        borderColor: 'rgba(249, 48, 21, 0.88)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
      ],
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default MultiAxisLine;
