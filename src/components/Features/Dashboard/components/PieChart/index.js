import React from 'react';
import { Pie } from '@reactchartjs/react-chart.js';

const PieChart = () => {
  const mocData = [
    { tag: 'Alimentação', value: 60 },
    { tag: 'Educação', value: 70 },
    { tag: 'Lazer', value: 100 },
    { tag: 'Moradia', value: 250 },
    { tag: 'Roupa', value: 150 },
    { tag: 'Saúde', value: 230 },
    { tag: 'Transporte', value: 30 },
  ];
  const data = {
    labels: [
      mocData[0].tag,
      mocData[1].tag,
      mocData[2].tag,
      mocData[3].tag,
      mocData[4].tag,
      mocData[5].tag,
      mocData[6].tag,
    ],
    datasets: [
      {
        data: [
          mocData[0].value,
          mocData[1].value,
          mocData[2].value,
          mocData[3].value,
          mocData[4].value,
          mocData[5].value,
          mocData[6].value,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(21, 249, 44, 0.5)',
          'rgba(21, 208, 249, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(21, 249, 44, 1)',
          'rgba(21, 208, 249, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Pie data={data} />
    </>
  );
};

export default PieChart;
