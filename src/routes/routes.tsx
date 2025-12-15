import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Proporty from "../pages/Proporty";
import Contact from "../pages/Contact";

import Login from "../pages/Login";
import Register from "../pages/Register";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/proporty" element={<Proporty />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/about" element={<Login />} /> */}
      <Route path = "/register" element = {<Register/>}/>
       <Route path = "/signin" element = {<Login/>}/>
    </Routes>
  );
};

export default AppRoutes;
