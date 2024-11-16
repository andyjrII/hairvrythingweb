import { Link } from 'react-router-dom';
import HairLogo from '../assets/logo-01.png';

const Navbar = () => {
  return (
    <nav className='navbar fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={HairLogo} alt='Hairvrything' />
          airvrything
        </Link>

        <Link
          className='btn btn-lg nav-btn'
          type='submit'
          role='button'
          to='#signup'
        >
          Join the waitlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
