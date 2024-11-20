const Personalized = ({ formRef }) => {
  const handleClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='personalized text-center'>
      <p>Get personalised insights and product picks for your hair.</p>
      <button
        to='#signup'
        className='btn btn-lg nav-btn'
        role='button'
        onClick={handleClick}
      >
        Join the waitlist
      </button>
    </div>
  );
};

export default Personalized;
