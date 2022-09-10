import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import { Routes, Route } from "react-router-dom";

function App1() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      
    </>
  );
}
export default App1;
