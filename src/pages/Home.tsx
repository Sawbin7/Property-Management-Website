import Body from "../components/Body";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
     
      <Navbar/>
      <Hero/>
      <Body/>
      <div className="text-3xl text-purple-700">
        Home Page of the Proporty website
      </div>
    </>
  );
};

export default Home;