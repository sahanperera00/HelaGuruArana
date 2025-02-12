import React from "react";

export default function Services() {
  return (
    <div className="w-screen flex justify-center py-20">
      <div className="relative max-w-[80%] lg:max-w-[70%] w-full flex flex-col space-y-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-10 lg:space-y-0">
          <p className="w-fit text-3xl text-center lg:text-left lg:text-4xl font-semibold border-b-3 pb-3">
            Our Services
          </p>
          <p className="lg:w-[600px] text-center lg:text-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tortor augue, vestibulum non felis sed.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="relative w-full flex flex-col justify-end items-center py-10 px-8 space-y-3 pt-20 lg:pt-0 rounded-4xl bg-[url('/products.jpg')] bg-cover bg-center lg:bg-bottom overflow-hidden">
            <div className="absolute -inset-10 bg-gradient-to-t from-[#00000085] to-transparent"></div>
            <div className="relative z-10 text-center lg:text-start space-y-3">
              <p className="text-2xl lg:text-2xl font-semibold text-white">
                Products
              </p>
              <p className="text-white lg:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tortor augue, vestibulum non felis sed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:col-span-2 lg:grid-cols-2 gap-10">
            {/* Service 2 */}
            <div className="relative w-full flex flex-col justify-end items-center py-10 px-8 space-y-3 pt-20 lg:pt-20 rounded-4xl bg-[url('/consultations.jpg')] bg-cover bg-center overflow-hidden">
              <div className="absolute -inset-10 bg-gradient-to-t from-[#000000B5] to-transparent"></div>
              <div className="relative z-10 text-center lg:text-start space-y-3">
                <p className="text-2xl lg:text-2xl font-semibold text-white">
                  Consultations
                </p>
                <p className="text-white lg:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tortor augue, vestibulum non felis sed.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="relative w-full flex flex-col justify-end items-center py-10 px-8 space-y-3 pt-20 lg:pt-20 rounded-4xl bg-[url('/treatments.jpg')] bg-cover bg-center overflow-hidden">
              <div className="absolute -inset-10 bg-gradient-to-t from-[#000000B5] to-transparent"></div>
              <div className="relative z-10 text-center lg:text-start space-y-3">
                <p className="text-2xl lg:text-2xl font-semibold text-white">
                  Treatments
                </p>
                <p className="text-white lg:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tortor augue, vestibulum non felis sed.
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="relative lg:col-span-2 w-full flex flex-col justify-end items-center py-10 px-8 space-y-3 pt-20 lg:pt-20 rounded-4xl bg-[url('/retreats.png')] bg-cover bg-center overflow-hidden">
              <div className="absolute -inset-10 bg-gradient-to-t from-[#000000B5] to-transparent"></div>
              <div className="relative z-10 text-center lg:text-start space-y-3">
                <p className="text-2xl lg:text-2xl font-semibold text-white">
                  Training Programs and Retreats
                </p>
                <p className="text-white lg:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tortor augue, vestibulum non felis sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
