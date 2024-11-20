import HairGoals from '../components/HairGoals';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ScrollText from '../components/ScrollText';
import Pledge from '../components/Pledge';
import Discover from '../components/Discover';
import FAQ from '../components/FAQ';
import Personalized from '../components/Personalized';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ScrollText />
      <HairGoals />
      <Pledge />
      <Discover />
      <FAQ />
      <Personalized />
      <Footer />
    </>
  );
};

export default Home;
