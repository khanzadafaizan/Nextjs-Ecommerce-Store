import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import '@fontsource/open-sans';
import '@fontsource/roboto';




function Hero() {
  return (
    <>
      <div className="mt-5" style={{ backgroundColor: "#f4f4f5", fontFamily: 'Roboto, sans-serif' }} >
        <div className="container mx-auto">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center py-2">
                <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
                  Collections
                </h1>
                <p className="mb-8 leading-relaxed text-gray-900">
                  You Can Explore And Shop Many Different Collections <br />{" "}
                  From Various Brands Here.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex font-sans-serif text-white bg-slate-900 py-3 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      className="w-4 me-2 mt-1"
                    />
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-4">
                <Image
                  src="/assets/hero-cover.jpeg"
                  width={1200}
                  height={800}
                  alt="Hero Cover Image"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
