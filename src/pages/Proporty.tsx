import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FilterBar from "../components/proporty/FilterBar";

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
