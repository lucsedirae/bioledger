//* Dependencies
import { formatDate } from 'lucsedirae';

export default function EntryForm() {
  //? Placeholder for today's date dynamic
  const todaysDate = formatDate(Date.now());

  return (
    <>
      <h3 className='subheader'>Create an entry for {todaysDate}</h3>

      <form>
        <div className='form-group'>
          <label className='label'>Weight</label>
          <input
            type='number'
            className='input'
            placeholder='Enter weight in lbs'
          />
        </div>
        <div className='form-group'>
          <label className='label'>Blood Pressure</label>
          <label className='label'>Systolic</label>
          <input
            type='number'
            className='input'
            placeholder='Enter the top reading (systolic)'
          />
        </div>
        <div className='form-group'>
          <label className='label'>Diastolic</label>
          <input
            type='number'
            className='input'
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
