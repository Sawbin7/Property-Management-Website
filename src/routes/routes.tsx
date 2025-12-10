import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Proporty from "../pages/Proporty";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/proporty" element={<Proporty />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
