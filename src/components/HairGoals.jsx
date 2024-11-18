import Girl from '../assets/images/who-girl.png';

const HairGoals = () => {
  return (
    <div className='row who-box'>
      <h1 className='text-center'>We are "HAIRVRYTHING"</h1>
      <div className='col-6 image-box'>
        <img src={Girl} alt='Girl with comb' />
      </div>
      <div className='col-6 text-box'>
        <h2>Share your hair goals and we will make it happen!</h2>
        <p>
          We are not just about products; we give power to your hair and
          confidence to each strand. Our unique approach combines cutting-edge
          AI technology with personalized solutions, ensuring every hair is
          appreciated and treated with the care it deserves.
        </p>
      </div>
    </div>
  );
};

export default HairGoals;
