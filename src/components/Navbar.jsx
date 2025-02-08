import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../utils/classNames.js";
import { navItems } from "../routes.js";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white hidden lg:flex rounded-full shadow-sm py-3 items-center justify-between">
      <div className="flex items-center space-x-2 mx-auto lg:ml-10">
        <img className="w-[49px]" src="/raku.png" alt="raku" />
        <p className="text-base font-medium uppercase">Hela Guru Arana</p>
      </div>
      <div className="w-[50%] lg:grid grid-cols-4 space-x-10">
        {navItems.map(({ label, path }) => (
          <p
            key={path}
            className={cn(
              "hover:cursor-pointer transition-all duration-100",
              location.pathname === path ? "font-bold" : "hover:font-semibold"
            )}
            onClick={() => navigate(path)}
          >
            {label}
          </p>
        ))}
      </div>
    </div>
  );
}
