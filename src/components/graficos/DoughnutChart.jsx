import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({dados}) => {
  const data = {
    labels: dados["labels"],
    datasets: [
      {
        label: 'Vencidos nessa semana',
        data: [36, 24, 20, 13.6, 6.4],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Azul
          'rgba(255, 159, 64, 0.6)', // Laranja
          'rgba(255, 206, 86, 0.6)', // Amarelo
          'rgba(75, 192, 192, 0.6)', // Verde
          'rgba(153, 102, 255, 0.6)', // Roxo
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Próximos a vencer nessa semana',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = value.toFixed(1) + '%';
            return `${label}: ${percentage}`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;