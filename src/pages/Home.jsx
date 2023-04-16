import Hero from "../components/Hero";
import ProudProducts from "../components/ProudProducts";
import Banner from "../components/Banner";
import Banner1 from "../assets/banner/banner1.jpg";
import Banner2 from "../assets/banner/banner2.jpg";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BannerReverse from "../components/BannerReverse";

const Home = () => {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable % Elegant Living"
        text="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
