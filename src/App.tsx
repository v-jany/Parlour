
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beauty from "./Beauty";
import Beautysalon from "./Beautysalon";
import BentoGallery from "./BentoGallery";

import Consultation from "./Consultation";
import Footer from "./Footer";
import Glow from "./Glow";
// import GridSection from "./GridSection";
import Hairtheraphy from "./Hairtheraphy";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skincare from "./Skincare";
import Steps from "./Steps";
import Whychoose from "./Whychoose";
import Booking from "./Booking";
import Booknow from "./Booknow";
import ExploreServices from "./ExploreServices";
import Gallery from "./Gallery";





function App() {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Whychoose />
            <Hero />
            <Beauty />
            <Skincare />
            <Consultation />
            <Portfolio />
            <Booking />
            <Glow />
            <Beautysalon />
            <Hairtheraphy />
            <Steps />
            {/* <BentoGallery /> */}
            <Footer />
          </>
        } />

        <Route path="/Booknow" element={<Booknow/>}/>
        <Route path="/ExploreServices" element={<ExploreServices/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>

        <Route path="beauty" element={<Beauty />} />
        <Route path="glow" element={<Glow />} />
        <Route path="skincare" element={<Skincare/>} />
        <Route path="haircare" element={<Hairtheraphy />} />
        <Route path="contact us" element={<Booking />} />

      </Routes>
    </BrowserRouter>
  )
}



export default App;
