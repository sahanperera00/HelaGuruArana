import React from "react";
import Navbar from "../components/Navbar";

export default function ComingSoon() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <Navbar />
      <div className="relative max-w-[80%] w-full flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full">
          <div className="space-y-10 text-center lg:text-left">
            <p className="text-4xl lg:text-8xl font-semibold">Coming Soon!</p>
            <p className="lg:w-[550px] text-xl">
              This page is under development. We are working hard to bring this
              page to you. Stay tuned!
            </p>
          </div>
          <img
            className="w-60 lg:w-100 opacity-100"
            src="/raku.png"
            alt="raku"
          />
        </div>
      </div>
    </div>
  );
}
