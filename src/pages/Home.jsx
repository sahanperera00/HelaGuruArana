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
      <div className="w-full h-[800px]"></div>

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
