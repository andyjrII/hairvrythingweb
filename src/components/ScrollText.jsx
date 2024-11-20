import { motion } from 'framer-motion';
import { GoDotFill } from 'react-icons/go';

const ScrollText = () => {
  const text = 'Your Path to Better Hair'; // Base text

  return (
    <div
      className='scroll-box'
      style={{
        whiteSpace: 'nowrap',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          position: 'absolute',
        }}
        animate={{ x: ['0%', '-50%'] }} // Shift by 50% of container width
        transition={{
          duration: 60,
          repeat: Infinity, // Infinite loop
          ease: 'linear', // Smooth motion
        }}
      >
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
              }}
            >
              {Array(20)
                .fill(null)
                .map((_, index) => (
                  <span key={index} style={{ marginRight: '0.5rem' }}>
                    {text} <GoDotFill className='scroll-icon' />
                  </span>
                ))}
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default ScrollText;
