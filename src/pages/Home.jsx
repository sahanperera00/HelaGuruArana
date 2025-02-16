import React from "react";
import "react-multi-carousel/lib/styles.css";
import Blogs from "../components/Blogs";
import Services from "../components/Services";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Banner1 />
      <Services />
      <Banner2 />
      <Blogs />
      <Footer />
    </div>
  );
}
