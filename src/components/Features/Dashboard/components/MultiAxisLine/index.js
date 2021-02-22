import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';

import { useSelector } from 'react-redux';

const MultiAxisLine = () => {
  const { listRecipeGraphsLine } = useSelector((state) => state.recipe);
  const { listExpenditureGraphsLine } = useSelector(
    (state) => state.expenditure,
  );

  const data = {
    labels: [
      listRecipeGraphsLine[6].postDay,
      listRecipeGraphsLine[5].postDay,
      listRecipeGraphsLine[4].postDay,
      listRecipeGraphsLine[3].postDay,
      listRecipeGraphsLine[2].postDay,
      listRecipeGraphsLine[1].postDay,
      listRecipeGraphsLine[0].postDay,
    ],
    datasets: [
      {
        label: 'Receita',
        data: [
          listRecipeGraphsLine[6].total,
          listRecipeGraphsLine[5].total,
          listRecipeGraphsLine[4].total,
          listRecipeGraphsLine[3].total,
          listRecipeGraphsLine[2].total,
          listRecipeGraphsLine[1].total,
          listRecipeGraphsLine[0].total,
        ],
        fill: false,
        backgroundColor: 'rgba(21, 249, 44,1)',
        borderColor: 'rgba(21, 249, 44, 0.88)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Despesa',
        data: [
          listExpenditureGraphsLine[6].total,
          listExpenditureGraphsLine[5].total,
          listExpenditureGraphsLine[4].total,
          listExpenditureGraphsLine[3].total,
          listExpenditureGraphsLine[2].total,
          listExpenditureGraphsLine[1].total,
          listExpenditureGraphsLine[0].total,
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
