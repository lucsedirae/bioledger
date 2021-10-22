//* Dependencies
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

//* Import context
import MetricContext from '../../context/metricContext';
import AuthContext from '../../context/authContext';

export const Charts = () => {
  //* Inite auth context
  const authContext = useContext(AuthContext);
  const { logout, loadUser } = authContext;
  //* Init metric context
  const metricContext = useContext(MetricContext);
  const { metrics, getMetrics } = metricContext;
  //* Init local state
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    loadUser();
    getMetrics();
    //! Reverse method is not ideal. Need to replace this with a function that sorts the
    //! new array using the date as an ordering index
    setChartData({
      labels: ['weight', 'diastolic', 'systolic'],
      datasets: [
        {
          label: 'Weight',
          data: metrics ? metrics.map((metric) => metric.weight).reverse() : '',
          backgroundColor: '#ffbb11',
          borderColor: '#ffbb11',
        },
        {
          label: 'Diastolic',
          data: metrics
            ? metrics.map((metric) => metric.diastolic).reverse()
            : '',
          backgroundColor: '#ff0000',
          borderColor: '#ff0000',
        },
        {
          label: 'Systolic',
          data: metrics
            ? metrics.map((metric) => metric.systolic).reverse()
            : '',
          backgroundColor: '#bad839',
          borderColor: '#bad839',
        },
      ],
    });
  }, []);

  console.log(metrics);
  console.log(chartData);

  return (
    <div>
      <h1>Charts</h1>
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            xAxes: [
              { type: 'linear', display: true, scaleLabel: { display: true } },
            ],
          },
        }}
      />
      <Link to='/entry'>Enter metrics</Link>
      <div>
        <a href='#!' onClick={logout}>
          Logout
        </a>
      </div>
    </div>
  );
};
