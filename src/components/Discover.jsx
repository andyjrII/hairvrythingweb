import { motion } from 'framer-motion';
import Electronics from '../assets/images/electronics.png';
import CallCenter from '../assets/images/call-center.png';
import Dashboard from '../assets/images/dashboard.png';
import Hair from '../assets/images/hair.png';
import SocialMedia from '../assets/images/social-media.png';
import MarketPlace from '../assets/images/market.png';

const Discover = () => {
  return (
    <div className='discover container'>
      {/* Left Section */}
      <div className='left-section'>
        <h1 className='text-center'>
          Discover <span className='hairvrything'>"HAIRVRYTHING"</span>
        </h1>
      </div>

      {/* Column 3 - smaller screen */}
      <div className='cards-container container-3'>
        <div className='grid-container'>
          <div className='card card-4'>
            <img
              src={Electronics}
              className='card-img-top'
              alt='Virtual Hair Scanner'
            />
            <div className='card-body'>
              <h5 className='card-heading'>Virtual Hair Scanner</h5>
              <p className='card-text'>
                Get in-depth analyses of your scalp and hair health using
                advanced imaging technology.
              </p>
            </div>
          </div>

          <div className='card card-3'>
            <img
              src={CallCenter}
              className='card-img-top'
              alt='Hair Tracker & AI Assist'
            />
            <div className='card-body'>
              <h5 className='card-heading'>Hair Tracker & AI Assist</h5>
              <p className='card-text'>
                Monitor your hair’s progress and access unlimited resources for
                maintaining hair health.
              </p>
            </div>
          </div>

          <div className='card card-1'>
            <img
              src={Dashboard}
              className='card-img-top'
              alt='Advanced Hair Analytics'
            />
            <div className='card-body'>
              <h5 className='card-heading'>Advanced Hair Analytics</h5>
              <p className='card-text'>
                Understand your hair with detailed insights and compare with
                global benchmarks.
              </p>
            </div>
          </div>

          <div className='card card-2'>
            <img src={Hair} className='card-img-top' alt='Virtual Showroom' />
            <div className='card-body'>
              <h5 className='card-heading'>Virtual Showroom</h5>
              <p className='card-text'>
                Experiment with hairstyles virtually before making a change
                using your mobile phone.
              </p>
            </div>
          </div>

          <div className='card card-4'>
            <img
              src={SocialMedia}
              className='card-img-top'
              alt='Product Recommendations'
            />
            <div className='card-body'>
              <h5 className='card-heading'>Product Recommendations</h5>
              <p className='card-text'>
                Receive curated product suggestions tailored to your unique hair
                profile.
              </p>
            </div>
          </div>

          <div className='card card-3'>
            <img
              src={MarketPlace}
              className='card-img-top'
              alt='Robust Marketplace'
            />
            <div className='card-body'>
              <h5 className='card-heading'>Robust Marketplace</h5>
              <p className='card-text'>
                Explore a vast marketplace with all the hair products you need,
                all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='right-section'>
        {/* Column 1 - Scroll Up */}
        <div className='cards-container container-1'>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className='card card-1' key='up-1'>
              <img
                src={Electronics}
                className='card-img-top'
                alt='Virtual Hair Scanner'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Virtual Hair Scanner</h5>
                <p className='card-text'>
                  Get in-depth analyses of your scalp and hair health using
                  advanced imaging technology.
                </p>
              </div>
            </div>

            <div className='card card-2' key='up-2'>
              <img
                src={CallCenter}
                className='card-img-top'
                alt='Hair Tracker & AI Assist'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Hair Tracker & AI Assist</h5>
                <p className='card-text'>
                  Monitor your hair’s progress and access unlimited resources
                  for maintaining hair health.
                </p>
              </div>
            </div>

            <div className='card card-4' key='up-3'>
              <img
                src={Dashboard}
                className='card-img-top'
                alt='Advanced Hair Analytics'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Advanced Hair Analytics</h5>
                <p className='card-text'>
                  Understand your hair with detailed insights and compare with
                  global benchmarks.
                </p>
              </div>
            </div>

            <div className='card card-3' key='up-4'>
              <img src={Hair} className='card-img-top' alt='Virtual Showroom' />
              <div className='card-body'>
                <h5 className='card-heading'>Virtual Showroom</h5>
                <p className='card-text'>
                  Experiment with hairstyles virtually before making a change
                  using your mobile phone.
                </p>
              </div>
            </div>

            <div className='card card-1' key='up-5'>
              <img
                src={SocialMedia}
                className='card-img-top'
                alt='Product Recommendations'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Product Recommendations</h5>
                <p className='card-text'>
                  Receive curated product suggestions tailored to your unique
                  hair profile.
                </p>
              </div>
            </div>

            <div className='card card-2' key='up-6'>
              <img
                src={MarketPlace}
                className='card-img-top'
                alt='Robust Marketplace'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Robust Marketplace</h5>
                <p className='card-text'>
                  Explore a vast marketplace with all the hair products you
                  need, all in one place.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column 2 - Scroll Down */}
        <div className='cards-container container-2'>
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className='card card-4' key='down-1'>
              <img
                src={Electronics}
                className='card-img-top'
                alt='Virtual Hair Scanner'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Virtual Hair Scanner</h5>
                <p className='card-text'>
                  Get in-depth analyses of your scalp and hair health using
                  advanced imaging technology.
                </p>
              </div>
            </div>

            <div className='card card-3' key='down-2'>
              <img
                src={CallCenter}
                className='card-img-top'
                alt='Hair Tracker & AI Assist'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Hair Tracker & AI Assist</h5>
                <p className='card-text'>
                  Monitor your hair’s progress and access unlimited resources
                  for maintaining hair health.
                </p>
              </div>
            </div>

            <div className='card card-1' key='down-3'>
              <img
                src={Dashboard}
                className='card-img-top'
                alt='Advanced Hair Analytics'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Advanced Hair Analytics</h5>
                <p className='card-text'>
                  Understand your hair with detailed insights and compare with
                  global benchmarks.
                </p>
              </div>
            </div>

            <div className='card card-2' key='down-4'>
              <img src={Hair} className='card-img-top' alt='Virtual Showroom' />
              <div className='card-body'>
                <h5 className='card-heading'>Virtual Showroom</h5>
                <p className='card-text'>
                  Experiment with hairstyles virtually before making a change
                  using your mobile phone.
                </p>
              </div>
            </div>

            <div className='card card-4' key='down-5'>
              <img
                src={SocialMedia}
                className='card-img-top'
                alt='Product Recommendations'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Product Recommendations</h5>
                <p className='card-text'>
                  Receive curated product suggestions tailored to your unique
                  hair profile.
                </p>
              </div>
            </div>

            <div className='card card-3' key='down-6'>
              <img
                src={MarketPlace}
                className='card-img-top'
                alt='Robust Marketplace'
              />
              <div className='card-body'>
                <h5 className='card-heading'>Robust Marketplace</h5>
                <p className='card-text'>
                  Explore a vast marketplace with all the hair products you
                  need, all in one place.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
