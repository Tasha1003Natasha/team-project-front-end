import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['coorect', 'incorrect'],
  datasets: [
    {
      label: '# of Votes',
      data: [9, 3],
      backgroundColor: ['#ff6b09', '#D7D7D7'],
      borderColor: '#ff6b09',
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,

  animation: {
    animateRotate: true,
    animateScale: true,
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Current Allocations',
    },
  },
};

export default function Chart() {
  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
}
