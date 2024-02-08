import "./App.scss";
import Aboutcomponent from "./components/About/About.component";
import ContactComponent from "./components/Contact/ContactComponent";
import Footer from "./components/Footer/Footer";
import HeroComponent from "./components/Home/Hero.Component";
import NavbarComponent from "./components/Navbar/Navbar.Component";
import Experience from "./components/WorkExperience/Experience";
// import LocomotiveScroll from "locomotive-scroll";

// import { Route, Routes } from "react-router-dom";

function App() {
  // const scroll = new LocomotiveScroll();
  return (
    <>
      <div>
        <NavbarComponent />
        <HeroComponent />
        <Aboutcomponent id="containerElement" />
        <Experience />
        <ContactComponent />
        <Footer />
      </div>
    </>
  );
}

export default App;
