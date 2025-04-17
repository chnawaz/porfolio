import React from "react";


import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

export default function Footer() {
  return (
    <>
      <hr />
      <footer>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <ul className="flex space-x-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/muhammad-nawaz-6b5296271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="blank"
                  >
                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-200 text-blue-800 size-10" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/https.ch.nawaz?utm_source=qr&igsh=ejV4eHdobzJwY2Jx"
                    target="blank"
                  >
                    <FaInstagram className="text-2xl hover:scale-125 duration-200 cursor-pointer text-red-800 size-10" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/923094094806" target="blank">
                    <FaSquareWhatsapp className="text-2xl cursor-pointer hover:scale-125 duration-200 text-green-800 size-10" />
                  </a>
                </li>
                <li>
                  <a href="mailto:chnawaz2139@gmail.com" target="blank">
                    <ImMail className="text-2xl cursor-pointer hover:scale-125 duration-200 text-red-700 size-9 mt-0.5" />
                  </a>
                </li>
              </ul>
            </div>
            {/* start c */}

            <p className="text-center">
              {" "}
              
              Copyright © {new Date().getFullYear()} - All Rights Reserved by
              <span className="text-xl text-blue-800 font-semibold">
                {" "}
                M.Nawaz
              </span>{" "}
              Industries Ltd
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
