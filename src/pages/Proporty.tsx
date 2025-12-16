import FilterBar from "../components/proporty/FilterBar";
import Navbar from "../components/GlobalComponents/Navbar";
import Footer from "../components/GlobalComponents/Footer";

const Proporty = () => {
  return (
    <>
      <Navbar />

      <div className="mt-25 mb-10 space-y-5 ">
        <FilterBar />
      </div>
      <Footer />
    </>
  );
};

export default Proporty;
