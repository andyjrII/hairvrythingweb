import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Link } from 'react-router-dom';
import HairLogo from '../assets/logo-01.png';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

const Footer = forwardRef((props, ref) => {
  const localRef = useRef();

  // Expose the scroll function to the parent component
  useImperativeHandle(ref, () => ({
    scrollIntoView: (options) => {
      if (localRef.current) {
        localRef.current.scrollIntoView(options);
      }
    },
  }));

  return (
    <footer>
      <div className='row'>
        <div className='col-md-9 text-start'>
          <Link className='footer-logo' to='/'>
            <img src={HairLogo} alt='Hairvrything' />
            airvrything
          </Link>
          <p>
            Sign up with your email address to receive the latest news and
            updates
          </p>
          <form id='signup' ref={localRef}>
            <input type='text' placeholder='Email' name='email' id='email' />
            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </div>
        <div className='col-md-3 my-auto'>
          <p className='text-center'>Keep in touch with us:</p>
          <div className='social-icons text-center'>
            <FaInstagram className='social-icon' />
            <FaFacebookF className='social-icon' />
            <FaXTwitter className='social-icon' />
            <FaLinkedinIn className='social-icon' />
            <Link href='https://www.tiktok.com/@hairvrything'>
              <FaTiktok className='social-icon' />
            </Link>
          </div>
          <hr className='custom-hr2 text-center' />
          <p className='copy text-center'>Copyright @ Hairvrything 2024</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
