import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HairLogo from '../assets/logo-01.png';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Footer = forwardRef((props, ref) => {
  const localRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Show loading spinner

    const email = localRef.current.email.value; // Get email value from form

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxNjC_1yVYWx8uN4zF8xrJm7-TIunpz3c_5D_wVGCCfZuciGaGyTBpOrGvZLH7-6dbY/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            email,
          }),
        }
      );

      const data = await response.json(); // Parse the JSON response

      // Show success popup using SweetAlert
      Swal.fire({
        title: 'Success!',
        text: data.message || 'Sign up successful!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error:', error);

      // Show error popup using SweetAlert
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue with your submission. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

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
          <form id='signup' ref={localRef} onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Email'
              name='email'
              id='email'
              required
            />
            <button type='submit' className='btn' disabled={loading}>
              {loading ? (
                <>
                  <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>{' '}
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
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
