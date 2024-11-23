import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeaderGirl from '../assets/images/header-girl.png';
import LeftLine from '../assets/images/left-line.png';
import RightLine from '../assets/images/right-line.png';

const Header = ({ formRef }) => {
  const handleClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          onClick={handleClick}
          role='button'
          to='#signup'
        >
          Join the waitlist
        </Link>
      </div>
      <div className='col-6 image-box'>
        <img src={HeaderGirl} alt='Girl' />
        <motion.span className='span-box' id='left-span'>
          Curl pattern:3B
        </motion.span>
        <motion.span className='span-box' id='right-span'>
          Hair type:Curl
        </motion.span>
        <motion.div
          className='box-1'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.75 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
        ></motion.div>
        <motion.div
          className='box-2'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.75 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
        ></motion.div>
        <motion.div
          className='box-3'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.75 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
        ></motion.div>
        <motion.div
          className='box-4'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.75 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
        ></motion.div>
        <motion.div
          className='box-5'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.75 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
        ></motion.div>
        <motion.div
          className='box-6'
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.75 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
        ></motion.div>
      </div>
      <img src={LeftLine} className='dash-line' id='left-line' />
      <img src={RightLine} className='dash-line' id='right-line' />
    </div>
  );
};

export default Header;
