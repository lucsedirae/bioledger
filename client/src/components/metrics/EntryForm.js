//* Dependencies
import { useState, useContext } from 'react';
import { formatDate } from 'lucsedirae';

//* Import context
import MetricContext from '../../context/metricContext';

export default function EntryForm() {
  //* Init metric context
  const metricContext = useContext(MetricContext);
  const { addMetric } = metricContext;

  //* Init local state
  const [metric, setMetric] = useState({
    weight: 0,
    systolic: 0,
    diastolic: 0,
  });
  const { weight, systolic, diastolic } = metric;

  const onChange = (e) =>
    setMetric({ ...metric, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || systolic === 0 || diastolic === 0) {
      alert('Please enter all values');
    } else {
      addMetric(metric);
      setMetric({
        weight: 0,
        systolic: 0,
        diastolic: 0,
      });
    }
  };
  //? Placeholder for today's date dynamic
  const todaysDate = formatDate(Date.now());

  return (
    <>
      <h3 className='subheader'>Create an entry for {todaysDate}</h3>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label className='label'>Weight</label>
          <input
            type='number'
            className='input'
            name='weight'
            value={weight}
            onChange={onChange}
            placeholder='Enter weight in lbs'
          />
        </div>
        <div className='form-group'>
          <label className='label'>Blood Pressure</label>
          <label className='label'>Systolic</label>
          <input
            type='number'
            className='input'
            name='systolic'
            value={systolic}
            onChange={onChange}
            placeholder='Enter the top reading (systolic)'
          />
        </div>
        <div className='form-group'>
          <label className='label'>Diastolic</label>
          <input
            type='number'
            className='input'
            name='diastolic'
            value={diastolic}
            onChange={onChange}
            placeholder='Enter the bottom reading (diastolic)'
          />
        </div>
        <div className='form-group'>
          <button className='btn'>Create</button>
        </div>
      </form>
    </>
  );
}
