import Power from '../assets/images/pledge-1.png';
import Grace from '../assets/images/pledge-2.png';
import Goals from '../assets/images/pledge-3.png';
import Confidence from '../assets/images/pledge-4.png';

const Pledge = () => {
  return (
    <div className='pledge'>
      <h1 className='text-center'>Our Pledge</h1>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-6 d-flex'>
            <div className='card text-center ms-auto card-1'>
              <img
                src={Power}
                className='card-img-top mx-auto'
                alt='Hair Stylist'
              />
              <div className='card-body'>
                <p className='card-text'>
                  There is power in your hair and stories in each strand.
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='card text-center card-2'>
              <img
                src={Grace}
                className='card-img-top mx-auto'
                alt='Hair Stylist'
              />
              <div className='card-body'>
                <p className='card-text'>
                  Your Afro and Curls are never unprofessional, rock them with
                  grace.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mx-auto'>
          <div className='col-md-6 d-flex'>
            <div className='card text-center ms-auto card-3'>
              <img
                src={Goals}
                className='card-img-top mx-auto'
                alt='Hair Stylist'
              />
              <div className='card-body'>
                <p className='card-text'>
                  Focus on your goals while we take care of your hair.
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-6 text-start'>
            <div className='card text-center card-4'>
              <img
                src={Confidence}
                className='card-img-top mx-auto'
                alt='Hair Stylist'
              />
              <div className='card-body'>
                <p className='card-text'>
                  Stand out with confidence and do not be afraid to let your
                  hair down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pledge;
