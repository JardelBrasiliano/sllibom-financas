import React from 'react';
import { Pie } from '@reactchartjs/react-chart.js';
import { useSelector } from 'react-redux';

const PieChart = () => {
  const { listRecipeGraphsPie } = useSelector((state) => state.recipe);

  const data = {
    labels: [
      'Alimentação',
      'Educação',
      'Lazer',
      'Moradia',
      'Pagamento',
      'Roupa',
      'Transporte',
    ],
    datasets: [
      {
        data: [
          listRecipeGraphsPie.Alimentação,
          listRecipeGraphsPie.Educação,
          listRecipeGraphsPie.Lazer,
          listRecipeGraphsPie.Moradia,
          listRecipeGraphsPie.Pagamento,
          listRecipeGraphsPie.Roupa,
          listRecipeGraphsPie.Transporte,
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
