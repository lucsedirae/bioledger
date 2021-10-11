//* React-icons imports
import { IconContext } from 'react-icons/lib';
import { BsHandThumbsUp } from 'react-icons/bs';

export default function Complete() {
  return (
    <>
      <div style={{ paddingTop: '5rem' }}>
        <IconContext.Provider value={{ color: 'FF0000', size: '8rem' }}>
          <BsHandThumbsUp />
        </IconContext.Provider>
      </div>
      <h3 className='subheader'>Today's entry complete!</h3>
    </>
  );
}
