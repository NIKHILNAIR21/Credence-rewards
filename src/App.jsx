import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Screen/Home";
import Brand from "./Screen/Brand";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brand />} />
        </Routes>
        <div className="h-[10vh]"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
