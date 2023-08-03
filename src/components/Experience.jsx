import React from "react";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import JS from "../assets/technologies/JS.png";
import java from "../assets/technologies/java.png";
import mongo from "../assets/technologies/mongo.png";
import node from "../assets/technologies/node.png";
import python from "../assets/technologies/python.png";
import reactjs from "../assets/technologies/React.png";
import spring from "../assets/technologies/spring-logo.webp";
import SQL from "../assets/technologies/SQL.webp";
import tailwind from "../assets/technologies/tailwind.png";
import github from "../assets/technologies/github.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-cyan-500"
    },
    {
      id: 4,
      src: JS,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 5,
      src: reactjs,
      title: "ReactJS",
      style: "shadow-sky-500"
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
      style: "shadow-lime-500"
    },
    {
      id: 7,
      src: java,
      title: "JAVA",
      style: "shadow-indigo-300"
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-amber-400"
    },
    {
      id: 9,
      src: spring,
      title: "Spring Boot",
      style: "shadow-green-500"
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-red-800"
    },
    {
      id: 11,
      src: SQL,
      title: "SQL",
      style: "shadow-violet-500"
    },
    {
      id: 12,
      src: github,
      title: "Github",
      style: "shadow-gray-100"
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full px-10 lg:pl-[80px] text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
