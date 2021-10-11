//* Dependencies
import {Link} from 'react-router-dom'

//* React-icons imports
import { IconContext } from 'react-icons/lib';
import { TiPlus } from 'react-icons/ti';
export default function Header() {
  return (
    <div className='header center'>
      <IconContext.Provider
        value={{ color: 'white', size: '1.45rem', className: 'icon' }}
      >
        <Link to='/' className='link'>
        <h1 >
          <TiPlus />
          Bioledger
        </h1>
        </Link>
      </IconContext.Provider>
    </div>
  );
}
