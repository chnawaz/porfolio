import React, { useState } from "react";
import pic from "../../public/logos/photo.avif";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-scroll";
import Cv from "../../public/cv/Nawaz_s_resume.pdf";

import { RiDownloadLine } from "react-icons/ri";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img className="h-12 w-12 rounded-full" src={pic} alt="" />
            <h1 className="font-semibold text-xl cursor-pointer ">
              M.<span className="text-green-800">NAWAZ</span>
              <p className="text-sm ">Full-Stack Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold text-gray-900"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li className="hover:scale-105 duration-200 cursor-pointer font-semibold text-gray-900 ">
                <a href={Cv} download>
                  Resume
                  <RiDownloadLine className="inline size-6" />
                </a>
              </li>
            </ul>
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden text-gray-800"
            >
              {menu ? <IoCloseSharp size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>

        {menu && (
          <div className="bg-slate-200">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-5 ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold text-xl text-gray-800"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li className="hover:scale-105 duration-200 cursor-pointer font-semibold text-xl text-gray-800">
                <a href={Cv} download>
                  Resume
                  <RiDownloadLine className="inline size-6" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
