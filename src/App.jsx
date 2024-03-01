import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home";
import Brand from "./Screen/Brand";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import CorporateGifting from "./component/CorporateGifting";
function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/corporate-gifting" element={<CorporateGifting/> } />

        </Routes>
        <div className="h-[10vh]"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
