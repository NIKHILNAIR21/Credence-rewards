import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const Brand = lazy(() => import("./Screen/Brand"));
const Home = lazy(() => import("./Screen/Home"));
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <div className="text-center text-amber-500 font-bold text-2xl">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/brands" element={<Brand />} />
          </Routes>
        </Suspense>
        <div className="h-[10vh]"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
