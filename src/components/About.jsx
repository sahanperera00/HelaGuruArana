import React from "react";

export default function About() {
  return (
    <div className="w-screen flex justify-center py-20">
      <div className="relative max-w-[80%] lg:max-w-[70%] w-full flex flex-col space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-5 flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <p className="w-fit text-3xl text-center lg:text-left lg:text-4xl font-semibold border-b-3 pb-3">
              Small Quotation
            </p>
            <p className="text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tortor augue, vestibulum non felis sed. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Consequatur fugit ad
              eius sapiente neque voluptas.
            </p>
          </div>
          <div className="rounded-br-4xl flex flex-col justify-center items-center lg:items-start lg:justify-start rounded-tl-4xl space-y-3 bg-[#e0ebe2] px-5 lg:px-8 py-8 border border-[#37483615]">
            <div className="w-[50px] h-[50px] bg-[#374836] rounded-full" />
            <p className="font-semibold text-2xl">Our Mission</p>
            <p className="text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur fugit ad eius sapiente neque voluptas.
            </p>
          </div>
          <div className="rounded-br-4xl flex flex-col justify-center items-center lg:items-start lg:justify-start rounded-tl-4xl space-y-3 bg-[#e0ebe2] px-5 lg:px-8 py-8 border border-[#37483615]">
            <div className="w-[50px] h-[50px] bg-[#374836] rounded-full" />
            <p className="font-semibold text-2xl">Our Vision</p>
            <p className="text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur fugit ad eius sapiente neque voluptas.
            </p>
          </div>
          <div className="rounded-br-4xl flex flex-col justify-center items-center lg:items-start lg:justify-start rounded-tl-4xl space-y-3 bg-[#e0ebe2] px-5 lg:px-8 py-8 border border-[#37483615]">
            <div className="w-[50px] h-[50px] bg-[#374836] rounded-full" />
            <p className="font-semibold text-2xl">Core Value #1</p>
            <p className="text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur fugit ad eius sapiente neque voluptas.
            </p>
          </div>
          <div className="rounded-br-4xl flex flex-col justify-center items-center lg:items-start lg:justify-start rounded-tl-4xl space-y-3 bg-[#e0ebe2] px-5 lg:px-8 py-8 border border-[#37483615]">
            <div className="w-[50px] h-[50px] bg-[#374836] rounded-full" />
            <p className="font-semibold text-2xl">Core Value #2</p>
            <p className="text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur fugit ad eius sapiente neque voluptas.
            </p>
          </div>
          <div className="rounded-br-4xl flex flex-col justify-center items-center lg:items-start lg:justify-start rounded-tl-4xl space-y-3 bg-[#e0ebe2] px-5 lg:px-8 py-8 border border-[#37483615]">
            <div className="w-[50px] h-[50px] bg-[#374836] rounded-full" />
            <p className="font-semibold text-2xl">Core Value #3</p>
            <p className="text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur fugit ad eius sapiente neque voluptas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
