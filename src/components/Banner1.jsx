import React from "react";

export default function Banner1() {
  return (
    <div className="w-screen h-[50vh] flex justify-center py-8 bg-[url('/image1.jpg')] bg-cover bg-center">
      <div className="relative max-w-[70%] w-full flex flex-col items-end justify-center space-y-10">
        <p className="text-6xl lg:text-8xl font-semibold text-white text-center lg:text-end">
          Sample Quote
        </p>
        <p className="lg:w-[600px] text-white text-center lg:text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor augue, vestibulum non felis sed.
        </p>
      </div>
    </div>
  );
}
