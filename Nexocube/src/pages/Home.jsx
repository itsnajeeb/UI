import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Achivement from "../components/Achivement/Achivement";
import UpcomingProject from "../components/UpcomingProject/UpcomingProject";
import Features from "../components/Features/Features";
import OurTeam from "../components/OurTeam/OurTeam";
import Roadmap from "../components/Products/Product";
import UnlockSmart from "../components/UnlockSmart/UnlockSmart";
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";

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
      <OurTeam />
      <Roadmap />
      <UnlockSmart />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
