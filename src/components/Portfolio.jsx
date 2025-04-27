import React from "react";

import wa from "../../public/wp.png"
import ba from "../../public/ba.png"

export default function Portfolio() {
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-15"
      >
        <div>
          <h1 className="font-bold text-3xl mb-5">Portfolio</h1>
          <span className="underline font-semibold ">Featured Projects</span>
          <div className="flex  flex-col  flex-wrap  md:flex-row m-auto  gap-4.5 ">
            <div className="card bg-base-100 md:w-96  shadow-sm m-auto my-3 sm:w-2xl">
              <figure>
                <img
                  src={wa}
                  alt="Weather App"
                />
              </figure>
              <div className="card-body bg-white">
                <h2 className="card-title">Basic Weather App</h2>
                <p>
                  Basic Weather app build by use of React and Material UI. 
                </p>
                <div className="card-actions justify-end">

                  <a href="https://github.com/chnawaz/weather_app" target="blank">
                  <button className="btn btn-primary" >view code</button>
                  </a>

                </div>
              </div>
            </div>
            {/* next */}
            <div className="card sm:w-2xl md:w-96 shadow-sm m-auto my-3  bg-white">
              <figure>
                <img
                  src={ba}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body md:mt-44 bg-white">
                <h2 className="card-title ">Books Store App</h2>
                <p className="">
                  A Books Store app build by using MERN stack.MongoDB use for Data, Node and Express for backend and frontend build by use of React.Js and Tailwind CSS
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">view code</button>
                </div>
              </div>
            </div>
            {/* next */}
            <div className="card bg-white sm:w-2xl md:w-96 shadow-sm m-auto my-3">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body md:mt-32">
                <h2 className="card-title">wander Lust</h2>
                <p>
                  Wander Lust is colone of AirBnB. it is build with EJS templates , Bootstrap , Node Js ,Express Js  and MongoDB.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">view code</button>
                </div>
              </div>
            </div>

            {/* next */}
            

            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
}
