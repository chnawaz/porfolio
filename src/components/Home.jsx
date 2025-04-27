import React from "react";

import { ImMail } from "react-icons/im";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import d1 from "../../public/logos/d1.png";

export default function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <div className="flex  flex-col-reverse md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-800 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-800 font-bold"
                strings={["Developer", "MERN Dev", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify tracking-wide  ">
              MERN Stack Developer with 1 years of experience in developing, and
              deploying full-stack web applications. Proficient in building
              scalable solutions using MongoDB, Express.js, React.js, and
              Node.js, with a strong focus on creating dynamic and user-friendly
              interfaces alongside robust backend systems. Experienced Developer
              with an internship at the{" "}
              <span className="text-blue-900 font-bold text-xl">
                {" "}
                Pakistan Bureau of Statistics{" "}
              </span>{" "}
              as a Full Stack Web Developer.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col-reverse justify-between md:flex-row items-center space-y-6 md:space-y-0  ">
              <div className=" space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/muhammad-nawaz-6b5296271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-200 text-blue-800 size-8" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/chnawaz" target="blank">
                      <FaGithubSquare className="text-2xl hover:scale-125 duration-200 cursor-pointer size-8" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/923094094806" target="blank">
                      <FaSquareWhatsapp className="text-2xl cursor-pointer hover:scale-125 duration-200 text-green-800 size-8" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:chnawaz2139@gmail.com"
                      target="blank"
                    >
                      <ImMail  className="text-2xl cursor-pointer hover:scale-125 duration-200 text-red-800 size-7.5" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* skill icons */}
              <div className="space-y-2 md:mt-10  mb-6">
                <h1 className="font-bold">Currently working on</h1>
                <div>
                  <div className="flex space-x-5">
                    <SiMongodb className="text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 text-green-900" />
                    <SiExpress className="text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 " />
                    <FaReact className="text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 text-blue-800" />
                    <FaNodeJs className="text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 text-green-900" />
                  </div>
                  <div className="flex space-x-7.5">
                    <h1 className="font-bold text-2xl md:text-3xl hover:scale-125 duration-200  text-green-900">
                      M
                    </h1>
                    <h1 className="font-bold text-2xl md:text-3xl hover:scale-125 duration-200 ">
                      E
                    </h1>
                    <h1 className="font-bold text-2xl md:text-3xl hover:scale-125 duration-200 text-blue-900">
                      R
                    </h1>
                    <h1 className="font-bold text-2xl md:text-3xl hover:scale-125 duration-200 text-green-900">
                      N
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-20 mt-10">
            <img className="h-full w-full" src={d1} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
