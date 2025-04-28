import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import NewContact from "./components/NewContact";

export default function App() {
  return (
    <>
      <div className="bg-white text-black">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experiance />
        {/* <Contact /> */}
        <NewContact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
