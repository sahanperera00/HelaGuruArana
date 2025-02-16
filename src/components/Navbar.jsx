import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../utils/classNames.js";
import { navItems } from "../routes.js";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  return (
    <div className="w-screen absolute z-10 flex justify-center">
      <span
        style={{ fontSize: "2rem" }}
        onClick={() => setShow(!show)}
        className="material-symbols-outlined absolute z-20 text-white right-5 top-5 lg:-top-10 lg:hidden cursor-pointer transition-transform duration-300"
      >
        {show ? "close" : "menu"}
      </span>
      <div
        className={`w-full lg:max-w-[70%] lg:mt-10 absolute z-10 bg-[#00000045] backdrop-blur-md pb-14 lg:pb-3 text-white lg:text-[#283528] lg:bg-white flex flex-col lg:flex-row lg:rounded-full shadow-sm py-3 items-center justify-between transition-all duration-300 ease-in-out transform ${
          show
            ? "scale-y-100 opacity-100 translate-y-0"
            : "scale-y-0 opacity-0 -translate-y-5"
        } origin-top lg:scale-y-100 lg:opacity-100 lg:translate-y-0`}
      >
        <div className="flex items-center space-x-2 mx-auto lg:ml-10">
          <img
            className="w-[49px] hidden lg:block"
            src="/raku.png"
            alt="raku"
          />
          <img className="w-[49px] lg:hidden" src="/raku (white).png" alt="raku" />
          <p className="text-base font-medium uppercase py-8 lg:py-0">
            Hela Guru Arana
          </p>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center lg:grid grid-cols-4 lg:space-x-10">
          {navItems.map(({ label, path }) => (
            <p
              key={path}
              className={cn(
                "w-full text-center lg:text-left lg:w-fit hover:cursor-pointer transition-all duration-100 py-3 lg:py-0",
                location.pathname === path ? "font-bold" : "hover:font-semibold"
              )}
              onClick={() => {
                navigate(path);
                setShow(false);
              }}
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
