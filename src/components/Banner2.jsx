import React from "react";
import Button from "../components/Button";

export default function Banner2() {
  return (
    <div className="w-screen flex justify-center py-8 bg-[url('/image2.jpg')] bg-cover bg-center py-20">
      <div className="relative max-w-[70%] w-full flex flex-col items-center justify-center space-y-10">
        <p className="text-3xl lg:text-4xl font-semibold text-white text-center">
          Sample Quote
        </p>
        <p className="lg:w-[600px] text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tortor augue, vestibulum non felis sed.
        </p>
        <Button
          variant="secondary"
          className="text-sm"
          text={"Make an Appointment"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
