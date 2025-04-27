import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { ImMail } from "react-icons/im";

export default function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

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
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="font-bold text-3xl mb-2">Contact me</h1>
        <div>
          <span className=" tracking-wide">
            Whatsapp{" "}
            <a href="https://wa.me/923094094806" target="blank">
              <FaSquareWhatsapp className="text-2xl inline cursor-pointer hover:sczale-125 duration-200 text-green-800 size-5 mx-2" />
            </a>
            :+923094094806
          </span>
          <br />
          <span className=" tracking-wide">
            Gmail{" "}
            <a href="mailto:chnawaz2139@gmail.com" target="blank">
              <ImMail className="text-2xl inline cursor-pointer hover:scale-125 duration-200 text-red-800 size-5 mx-2" />
            </a>
            :chnawaz2139@gmail.com
          </span>
        </div>
        <br />

        <span>Or fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center my-5 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/azywjjnb"
            // method="POST"
            className="bg-slate-200 sm:w-fit  md:w-96 px-8 py-6 rounded-2xl "
          >
            <h1 className="text-xl font-semibold mb-4 text-gray-800">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block font-medium text-gray-800">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your FullName"
                id="name"
                name="name"
                className=" rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block font-medium text-gray-800">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="Enter your Email Address"
                id="name"
                name="email"
                className=" rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block font-medium text-gray-800">Message</label>
              <textarea
                {...register("message", { required: true })}
                type="text"
                placeholder="Type your message here"
                id="name"
                name="message"
                className=" rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submint"
              className=" rounded-lg py-2 px-4 bg-blue-600 text-white hover:bg-blue-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
