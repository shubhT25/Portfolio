import React from "react";
import "./cards.css";
import WeCare from "../assets/portfolio/WeCare.jfif";
import Matrix from "../assets/portfolio/OIP.jfif";
import ReactPortfolio from "../assets/portfolio/React-portfolio.png";
import Simon from "../assets/portfolio/Simon.jpg";
import TMDB from "../assets/portfolio/MovieDB.png";
import Tourism from "../assets/portfolio/Tourism.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      href: Matrix,
      title: "Matrix",
      desp: "Solved a simple matrix problem for maximum sum.",
      tech: "HTML, CSS, JavaScript, React",
      demo: "https://basic-matrix-demo.netlify.app",
      code: "https://github.com/shubhT25/Matrix-App",
    },
    {
      id: 2,
      href: Simon,
      title: "Simon Game",
      desp: "Designed a web game to check the visual memory of the player.",
      tech: "HTML, CSS, JavaScript",
      demo: "https://simon-game-1997.netlify.app",
      code: "https://github.com/shubhT25/SimonGame",
    },
    {
      id: 3,
      href: Tourism,
      title: "WayFar App",
      desp: "Designed a basic tourist web app to travel popular destinations.",
      tech: "HTML, CSS, JavaScript, Node, JSON Server",
      demo: "https://wayfar-1997.netlify.app",
      code: "https://github.com/shubhT25/WayFarFrontend",
    },
    {
      id: 4,
      href: ReactPortfolio,
      title: "My Portfolio",
      desp: "Created my portfolio using frontend technologies.",
      tech: "HTML, CSS, JavaScript, React, TailwindCSS",
      demo: "#",
      code: "https://github.com/shubhT25/Portfolio",
    },
    {
      id: 5,
      href: TMDB,
      title: "TMDB Clone",
      desp: "Created a single page TMDB clone website",
      tech: "HTML, CSS, JavaScript, React, Saas, Redux",
      demo: "https://moviedb-1997.netlify.app",
      code: "https://github.com/shubhT25/TMBD",
    },
    {
      id: 6,
      href: WeCare,
      title: "Hospitilty Management Website",
      desp: "Created a Hospitilty Website with backend and frontend(in development)",
      tech: "HTML, CSS, JavaScript, React, Redux, Node, Express, Mongo",
      demo: "#",
      code: "https://github.com/shubhT25/WeCare-App",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-24 px-10 lg:pl-[80px]">
        <div className="pb-8">
          <p className="text-3xl text-gray-100 font-bold inline border-b-4 border-gray-400 sm:text-4xl">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-7 sm:px-0">
          {portfolioItems.map(({ id, href, title, desp, tech, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg w-[80%] mx-[10%] sm:w-[100%] sm:mx-0"
            >
              <div className="card bg-transparent h-[190px] sm:w-[100%] sm:h-[160px]">
                <div className="card-inner relative text-center h-[100%]">
                  <div className="card-image rounded-t-md absolute w-[100%] h-[100%]">
                    <img
                      src={href}
                      alt={title}
                      className="rounded-t-md w-[100%] h-[100%] sm:h-[180px]"
                    />
                  </div>
                  <div className="card-text absolute bg-white text-gray-600 w-[100%] rounded-t-md h-[190px] sm:h-[180px]">
                    <h1 className="text-xl text-black py-1">{title}</h1>
                    <p className="px-10 sm:px-2 text-sm">{desp}</p>
                    <br />
                    <p className="px-10 sm:px-2 text-left text-sm">
                      <strong>Techology used: </strong> {tech}
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 pt-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 pt-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
