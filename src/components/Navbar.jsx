import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-full shadow-sm py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2 mx-auto lg:ml-10">
        <img className="w-[49px]" src="/raku.png" alt="raku" />
        <p className="text-base font-medium uppercase">Hela Guru Arana</p>
      </div>
      <div className="w-[50%] hidden lg:grid grid-cols-4 space-x-10">
        <p
          className="hover:cursor-pointer hover:font-semibold transition-all duration-100"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <p
          className="hover:cursor-pointer hover:font-semibold transition-all duration-100"
          onClick={() => navigate("/about")}
        >
          About Us
        </p>
        <p
          className="hover:cursor-pointer hover:font-semibold transition-all duration-100"
          onClick={() => navigate("/services")}
        >
          Services
        </p>
        <p
          className="hover:cursor-pointer hover:font-semibold transition-all duration-100"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </p>
      </div>
    </div>
  );
}
