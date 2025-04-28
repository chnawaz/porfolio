import React from "react";
import axios from "axios";
// import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function NewContact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/azywjjnb", userInfo);
      toast.success("your message has been sent");
    } catch (error) {
      toast.error(`something went wrong.${error}`);
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <h1 className="font-bold text-3xl mb-2">Contact me</h1>
        <div>
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
                <a href="mailto:chnawaz2139@gmail.com" target="blank">
                  <ImMail className="text-2xl cursor-pointer hover:scale-125 duration-200 text-red-800 size-7.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />

        <span>Or fill out the form to contact me</span>

        <div className="mt-8  flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-semibold  text-gray-800">
              Send Your Message
            </h1>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black">Full Name</legend>
              <input
                {...register("name", { required: true })}
                id="name"
                name="name"
                type="text"
                className="input bg-slate-200 text-black"
                placeholder="Enter your FullName"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black">
                Email Address
              </legend>
              <input
                {...register("email", { required: true })}
                id="name"
                name="email"
                type="email"
                className="input bg-slate-200"
                placeholder="Enter your Email Address"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black">Message</legend>
              <input
                {...register("message", { required: true })}
                id="name"
                name="message"
                type="text"
                className="input bg-slate-200 input-lg"
                placeholder="Type your message here"
                required
              />
            </fieldset>
            <button
              type="submint"
              className=" rounded-lg py-2 px-4 bg-blue-600 text-white hover:bg-blue-800 my-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
