import React from "react";
import "react-multi-carousel/lib/styles.css";
import Blogs from "../components/Blogs";
import Services from "../components/Services";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="w-full h-[800px]"></div>
      <Banner1 />
      <Services />
      <Banner2 />
      <Blogs />
      <Footer />
    </div>
  );
}
