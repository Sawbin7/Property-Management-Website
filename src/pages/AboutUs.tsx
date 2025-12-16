import AboutGrid from "../components/AboutComponents/AboutGrid";
import Footer from "../components/GlobalComponents/Footer";
import Navbar from "../components/GlobalComponents/Navbar";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <AboutGrid />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
