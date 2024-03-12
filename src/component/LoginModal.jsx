import React from "react";
import artImg1 from "../assets/art-1.png";
import artImg2 from "../assets/art-2.png";
const LoginModal = ({ isOpen, onClose }) => {
  const modalStyle = isOpen
    ? "fixed inset-0 flex items-center  justify-center"
    : "hidden";
  const overlayStyle = isOpen
    ? "fixed inset-0 bg-black bg-opacity-50 z-[7000] backdrop-filter backdrop-blur"
    : "hidden";
  const closeModal = () => {
    onClose();
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={overlayStyle} onClick={closeModal}>
      <div className={modalStyle}>
        <div
          onClick={stopPropagation}
          className="bg-white w-[60%] gap-12 flex  p-8 rounded-lg shadow-lg"
        >
          <div className="w-full">
            <h2 className="text-2xl mb-4 font-semibold text-left">
              Welcome back 👋
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="border rounded-md px-4 py-2 w-full"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="border rounded-md px-4 py-2 w-full"
                  type="password"
                  placeholder="Minimum 8 Character"
                />
              </div>
              <button
                className="bg-gray-900 hover:bg-gray-950 text-white w-full font-bold py-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <div className="container-img rounded-3xl">
            <div className="scrolling-images">
              <img
                src={artImg1}
                className="scrolling-image  scale-105"
                alt="Art"
              />
              <img
                src={artImg2}
                className="scrolling-image scale-105"
                alt="Art"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
