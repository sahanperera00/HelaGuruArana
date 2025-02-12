import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-screen h-[80vh] flex justify-center py-8 bg-[url('/hero2.jpg')] bg-cover bg-center">
        <div className="relative max-w-[70%] w-full">
          <Navbar />
          {/* Hero Section */}
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
      {/* Section 1 */}
      <div className="w-full h-[800px]"></div>

      {/* Section 2 */}
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

      {/* Section 3 */}
      <div className="w-screen flex justify-center py-20">
        <div className="relative max-w-[80%] lg:max-w-[70%] w-full flex flex-col space-y-10">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0">
            <p className="text-4xl text-center lg:text-left lg:text-5xl font-semibold border-b-3 pb-3">
              Our Services
            </p>
            <p className="lg:w-[600px] text-center lg:text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tortor augue, vestibulum non felis sed.
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
                    Training Program and Retreats
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

      {/* Section 4 */}
      <div className="w-screen h-[60vh] flex justify-center py-8 bg-[url('/image2.jpg')] bg-cover bg-center">
        <div className="relative max-w-[70%] w-full flex flex-col items-center justify-center space-y-10">
          <p className="text-6xl lg:text-8xl font-semibold text-white text-center">
            Sample Quote
          </p>
          <p className="lg:w-[600px] text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tortor augue, vestibulum non felis sed.
          </p>

          <Button
            variant="secondary"
            text={"Make an Appointment"}
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full h-[800px]"></div>
    </div>
  );
}
