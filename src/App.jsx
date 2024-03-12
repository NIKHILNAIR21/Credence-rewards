import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Screen/Home";
import Brand from "./Screen/Brand";
import Product from "./Screen/ProductPage";
import CorporateGifting from "./component/CorporateGifting";
import AboutUs from "./component/AboutUs";
import CheckBalance from "./Screen/CheckBalance";
import LoginModal from "./component/LoginModal";
import CheckoutPage from "./Screen/CheckoutPage";

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const toggleModal = (modalType) => {
    if (modalType === "login") {
      setLoginModalOpen((prevState) => !prevState);
    }
  };
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  return (
    <div>
      <Router>
        <div>
          <Navbar onLoginClick={() => toggleModal("login")} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/product" element={<Product />} />
          <Route path="/corporate-gifting" element={<CorporateGifting />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/check-balance" element={<CheckBalance />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <div className="h-[10vh]"></div>
        <Footer />
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      </Router>
    </div>
  );
}

export default App;
