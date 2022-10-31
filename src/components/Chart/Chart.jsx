import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  getCurrectAnswer,
  getIncurrectAnswer,
} from '../../redux/tests/test-selector';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

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
  const correct = useSelector(getCurrectAnswer);
  const incorrect = useSelector(getIncurrectAnswer);
  const data = {
    labels: ['coorect', 'Incorrect'],
    datasets: [
      {
        label: '# of Votes',
        data: [correct, incorrect],
        backgroundColor: ['#ff6b09', '#D7D7D7'],
        borderColor: '#ff6b09',
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
}
