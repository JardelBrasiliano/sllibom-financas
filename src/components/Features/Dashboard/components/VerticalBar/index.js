import React, { useEffect, useState } from 'react';

import { Bar } from '@reactchartjs/react-chart.js';
import { useSelector } from 'react-redux';

const VerticalBar = () => {
  const [finalList, setFinalList] = useState([]);
  const { listRecipeGraphsBar } = useSelector((state) => state.recipe);

  useEffect(() => {
    const newList = listRecipeGraphsBar.map((item) => {
      if (!Number.isNaN(+item)) {
        return +item;
      }
      return 0;
    }, []);
    setFinalList(newList);
  }, [listRecipeGraphsBar]);

  const data = {
    labels: [
      'jan',
      'fev',
      'mar',
      'abr',
      'maio',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ],
    datasets: [
      {
        label: 'receita',
        data: [
          finalList[0],
          finalList[1],
          finalList[2],
          finalList[3],
          finalList[4],
          finalList[5],
          finalList[6],
          finalList[7],
          finalList[8],
          finalList[9],
          finalList[10],
          finalList[11],
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
