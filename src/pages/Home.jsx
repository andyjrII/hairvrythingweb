import HairGoals from '../components/HairGoals';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ScrollText from '../components/ScrollText';
import Pledge from '../components/Pledge';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ScrollText />
      <HairGoals />
      <Pledge />
    </>
  );
};

export default Home;
