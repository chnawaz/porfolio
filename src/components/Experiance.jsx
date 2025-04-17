import React from "react";

import html from "../../public/skillLogos/html.png";
import css from "../../public/skillLogos/css.png";
import js from "../../public/skillLogos/javascript.png";
import bootstrap from "../../public/skillLogos/bootstrap.png";
import tailwind from "../../public/skillLogos/tailwind.png";
import express from "../../public/skillLogos/express.png";
import node from "../../public/skillLogos/node.png";
import mongo from "../../public/skillLogos/mongo.png";
import mysql from "../../public/skillLogos/mysql.png";
import material from "../../public/skillLogos/material.png";
import react from "../../public/skillLogos/react.png";
import npm from "../../public/skillLogos/npm.png";
import api from "../../public/skillLogos/api.png";
import git from "../../public/skillLogos/git.png";
import github from "../../public/skillLogos/github.png";

export default function Experiance() {
  const items = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id: 5,
      logo: material,
      name: "Material UI",
    },
    {
      id: 6,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 7,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      logo: npm,
      name: "NPM",
    },
    {
      id: 9,
      logo: node,
      name: "Node.Js",
    },
    {
      id: 10,
      logo: express,
      name: "Express.Js",
    },
    {
      id: 11,
      logo: api,
      name: "REST APIs",
    },
    {
      id: 12,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 13,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 14,
      logo: git,
      name: "Git",
    },
    {
      id: 15,
      logo: github,
      name: "GitHub",
    },
  ];

  return (
    <>
      <div
        name="Experiance"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <div>
          <h1 className="font-bold text-3xl mb-5">Experiance</h1>
          <p className="font-semibold">
            I have have 1 year of experiance in below Technologies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-5 ">
            {items.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col justify-center text-center size-3/5 m-auto my-4 hover:scale-110 duration-300"
              >
                <img src={logo} alt="" />
                <p className=" font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
