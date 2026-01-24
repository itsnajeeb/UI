import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Achivement from "../components/Achivement/Achivement";
import UpcomingProject from "../components/UpcomingProject/UpcomingProject";
import Features from "../components/Features/Features";
import OurTeam from "../components/OurTeam/OurTeam";
import UnlockSmart from "../components/UnlockSmart/UnlockSmart";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import RoadToSuccess from "../components/RoadToSuccess/RoadToSuccess";
import Product from "../components/Products/Product";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Hero />
      </div>
      <Achivement />
      <UpcomingProject />
      <Features />
      <RoadToSuccess/>
      <OurTeam />
      <Product />
      <UnlockSmart />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
