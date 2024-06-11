import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const CombinedChart = () => {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        type: 'bar',
        label: 'Quantidade de Compras',
        data: [5, 10, 8, 15, 20, 18, 22, 25, 10, 8, 15, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: 'Valor Total das Compras',
        data: [5000, 10000, 8000, 15000, 20000, 18000, 22000, 25000, 10000, 8000, 15000, 5000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quantidade de compras e Valor total das compras',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          callback: function (value) {
            return `R$${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          },
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value) {
            return value.toLocaleString('pt-BR');
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CombinedChart;