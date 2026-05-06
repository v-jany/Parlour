import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beauty from "./Beauty";
import Beautysalon from "./Beautysalon";
import Booking from "./Booking";
import Booknow from "./Booknow";
import Consultation from "./Consultation";
import ExploreServices from "./ExploreServices";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Glow from "./Glow";
import Hairtheraphy from "./Hairtheraphy";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skincare from "./Skincare";
import Steps from "./Steps";
import Whychoose from "./Whychoose";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home" className="scroll-section">
                <Hero />
              </div>
              <div id="about" className="scroll-section">
                <Whychoose />
              </div>
              <Beauty />
              <div id="skincare" className="scroll-section">
                <Skincare />
              </div>
              <Consultation />
              <Portfolio />
              <div id="contact" className="scroll-section">
                <Booking />
              </div>
              <Glow />
              <Beautysalon />
              <div id="haircare" className="scroll-section">
                <Hairtheraphy />
              </div>
              <Steps />
              <Footer />
            </>
          }
        />

        <Route path="/Booknow" element={<Booknow />} />
        <Route path="/ExploreServices" element={<ExploreServices />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
