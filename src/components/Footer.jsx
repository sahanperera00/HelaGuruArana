import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <div className="bg-[#374836] w-full flex flex-col items-center justify-center">
      <div className="relative max-w-[80%] lg:max-w-[70%] w-full lg:grid-cols-4 gap-5 py-10 flex flex-col-reverse lg:grid lg:grid-cols-4">
        <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0">
          <div className="flex justify-center items-center space-x-1 -ml-3">
            <img className="w-[49px]" src="/raku (white).png" alt="raku" />
            <p className="text-base font-medium uppercase text-white">
              Hela Guru Arana
            </p>
          </div>
          <p className="text-sm text-white mt-3 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tortor augue, vestibulum non felis sed.
          </p>
          <div className="flex space-x-3 mt-5">
            <div className="flex flex-row space-x-3 items-center">
              <img
                className="w-[22px] h-[22px]"
                src="/facebook.webp"
                alt="facebook"
              />
              <img
                className="w-[22px] h-[22px]"
                src="/instagram.webp"
                alt="instagram"
              />
              <img className="w-[30px] h-[30px]" src="/gmail.png" alt="gmail" />
              <img
                className="w-[22px] h-[22px]"
                src="/whatsapp.png"
                alt="whatsapp"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row col-span-3 items-center lg:items-start text-center lg:text-right lg:pt-5 lg:grid lg:grid-cols-3 gap-5">
          <div className="flex flex-col lg:items-end text-center lg:text-right pt-5 lg:pt-0">
            <p className="text-base font-medium text-white">Quick Links</p>
            <div className="flex flex-col mt-3 space-y-2">
              <p className="text-sm text-white">About Us</p>
              <p className="text-sm text-white">Services</p>
              <p className="text-sm text-white">Contact Us</p>
              <p className="text-sm text-white">FAQ</p>
            </div>
          </div>
          <div className="flex flex-col lg:items-end text-center lg:text-right pt-5 lg:pt-0">
            <p className="text-base font-medium text-white">Opening Hours</p>
            <div className="flex flex-col mt-3 space-y-2">
              <p className="text-sm text-white">Monday - Friday: 9am - 5pm</p>
              <p className="text-sm text-white">Saturday: 9am - 5pm</p>
              <p className="text-sm text-white">Sunday: Closed</p>
            </div>
          </div>
          <div className="flex flex-col lg:items-end text-center lg:text-right pt-5 lg:pt-0">
            <p className="text-base font-medium text-white">Get In Touch</p>
            <div className="flex flex-col mt-3 space-y-2">
              <p className="text-sm text-white">Aiththaliyadda Road, Matale</p>
              <p className="text-sm text-white">helaguruarana1234@gmail.com</p>
              <p className="text-sm text-white">(+94) 77 363 7593</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f0] w-full py-2 flex items-center justify-center">
        <p className="text-xs text-[#374836] font-medium text-center">
          &copy; {date.getFullYear()} Hela Guru Arana. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
