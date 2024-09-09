import Header from "../ui/Header";
import HeroSection from "../features/homepage/HeroSection";
import StatisticsSection from "../features/homepage/StatisticsSection";
import CausesSection from "../features/homepage/CausesSection";
import DonateSection from "../features/homepage/DonateSection";
import Footer from "../ui/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-color max-w-[1440px]  mx-auto relative">
        <Header />
        <HeroSection />
        <StatisticsSection />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <CausesSection />
        <DonateSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
