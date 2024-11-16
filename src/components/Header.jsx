import { Link } from 'react-router-dom';
import HeaderGirl from '../assets/images/header-girl.png';

const Header = () => {
  return (
    <div className='row header'>
      <div className='col-6 text-box'>
        <h1>
          Best
          <span className='light'> Hair</span>, Anyday, Everyday!
        </h1>
        <p>
          Say goodbye to hair struggles and hello to confidence with
          personalised hair care just for you. Be the first to know when we
          launch!
        </p>
        <Link
          className='btn btn-lg nav-btn'
          type='submit'
          role='button'
          to='#signup'
        >
          Join the waitlist
        </Link>
      </div>
      <div className='col-6 image-box'>
        <img src={HeaderGirl} alt='Girl' />
      </div>
    </div>
  );
};

export default Header;
