import HeroMain from '../components/HeroMain';
import LatestBlogsList from '../components/latestblogs/LatestBlogsList';
import Footer from '../components/Footer';

const Hero = () => {
  return (
    <div>
      <HeroMain />
      <LatestBlogsList />
      <Footer />
    </div>
  );
};

export default Hero;
