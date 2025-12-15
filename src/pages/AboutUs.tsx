import AboutGrid from "../components/AboutGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
