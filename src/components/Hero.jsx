import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div>
      <section className="dark:bg-gray-800 mt-16 ">
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              We provide delivery within 30mins
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Home delivery and online reservation system for restaurants, cafe,
              food & groceries.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Button>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className=" text-lg font-semibold rounded text-white"
                >
                  Shop now
                </a>
              </Button>
              {/* <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Malesuada
              </a> */}
            </div>
          </div>
          <div className="flex items-center justify-center p-16 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://img.freepik.com/free-vector/grocery-shopping-isometric-landing-page-purple-web-banner-concept_88138-450.jpg?w=996&t=st=1679486630~exp=1679487230~hmac=d69aeba0b43b3349df95c35b3efcaed22340636eb345a37cbad99ba65bdf51a5"
              alt=""
              className="rotate-12 object-contain h-72 "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
