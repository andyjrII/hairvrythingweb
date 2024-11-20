import { Link } from 'react-router-dom';
import HairLogo from '../assets/logo-01.png';

const Navbar = ({ formRef }) => {
  const handleClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='navbar fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={HairLogo} alt='Hairvrything' />
          airvrything
        </Link>

        <Link
          className='btn btn-lg nav-btn'
          role='button'
          to='#signup'
          onClick={handleClick}
        >
          Join the waitlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
