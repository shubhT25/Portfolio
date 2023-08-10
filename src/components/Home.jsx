import React from "react";
import kotaro from "../assets/kotaro_3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 pt-24 md:flex-row md:pt-10 pl:6 sm:pl-8 md:pl-10 lg:pl-[80px]">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-justify">
            I have almost 2 years experience of building and desgining software.
            Currently, I love to work on web applications using technologies
            like JavaScript, React, CSS frameworks with Node, Java or Python in
            a backend.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:font-medium duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={kotaro}
            alt="Kotaro Lives Alone"
            title="Kotaro Lives Alone"
            className="mx-auto w-40 h-70 pt-16 md:w-3/4 md:h-min sm:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
