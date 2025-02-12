import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="w-screen h-[80vh] flex justify-center py-8 bg-[url('/hero2.jpg')] bg-cover bg-center">
      <div className="relative max-w-[70%] w-full">
        <Navbar />
        <div className="flex flex-col-reverse lg:flex-row items-center w-full pt-20 lg:pt-30">
          <div className="space-y-10 text-center lg:text-left">
            <p className="text-6xl lg:text-8xl font-semibold text-white">
              Hela Guru Arana
            </p>
            <p className="lg:w-[600px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tortor augue, vestibulum non felis sed.
            </p>
            <Button
              variant="primary"
              text={"Make an Appointment"}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
