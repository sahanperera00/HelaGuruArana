import React from "react";
import Carousel from "react-multi-carousel";

export default function Blogs() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-screen flex justify-center pt-20 pb-10">
      <div className="relative max-w-[80%] lg:max-w-[70%] w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between space-y-10 lg:space-y-0 px-5">
          <p className="w-fit text-3xl text-center lg:text-left lg:text-4xl font-semibold border-b-3 pb-3">
            Blogs
          </p>
        </div>
        <Carousel responsive={responsive} className="" itemClass="px-5 py-10">
          {/* Article 1 */}
          <div className="flex flex-col space-y-3 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/blog1.jpg"
              alt="Blog 1"
              className="w-full h-[150px] object-cover"
            />
            <div className="space-y-3 bg-white px-6 pb-10">
              <p className="w-fit pb- text-xl font-semibold">
                Blog Title #1
              </p>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tortor augue, vestibulum non felis sed.
              </p>
            </div>
          </div>
          {/* Article 2 */}

          <div className="flex flex-col space-y-3 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/blog2.jpg"
              alt="Blog 1"
              className="w-full h-[150px] object-cover"
            />
            <div className="space-y-3 bg-white px-6 pb-10">
              <p className="w-fit text-xl font-semibold">
                Blog Title #2
              </p>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tortor augue, vestibulum non felis sed.
              </p>
            </div>
          </div>
          {/* Article 3 */}

          <div className="flex flex-col space-y-3 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/blog3.jpg"
              alt="Blog 1"
              className="w-full h-[150px] object-cover"
            />
            <div className="space-y-3 bg-white px-6 pb-10">
              <p className="w-fit text-xl font-semibold">
                Blog Title #3
              </p>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tortor augue, vestibulum non felis sed.
              </p>
            </div>
          </div>
          {/* Article 4 */}

          <div className="flex flex-col space-y-3 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/blog4.jpg"
              alt="Blog 1"
              className="w-full h-[150px] object-cover"
            />
            <div className="space-y-3 bg-white px-6 pb-10">
              <p className="w-fit text-xl font-semibold">
                Blog Title #4
              </p>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tortor augue, vestibulum non felis sed.
              </p>
            </div>
          </div>
          {/* Article 5 */}

          <div className="flex flex-col space-y-3 bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/blog5.jpg"
              alt="Blog 1"
              className="w-full h-[150px] object-cover"
            />
            <div className="space-y-3 bg-white px-6 pb-10">
              <p className="w-fit text-xl font-semibold">
                Blog Title #5
              </p>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tortor augue, vestibulum non felis sed.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
