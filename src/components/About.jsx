import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center pt-24 px-10 w-full h-full lg:pl-[80px]">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-400 sm:text-4xl">
            About Me
          </p>
        </div>
        <p className="text-gray-200 text-lg py-4 text-justify">
          I am a Computer Science graduate engineer and work as a professional
          as well as in love with Full Stack Development. I am dedicated to
          continuously learning about new web design trends and concepts. I have
          good experience with backend technologies mostly in Node and Java and
          also am currently aspiring to learn more. In frontend, I have a good
          expertise in ReactJs and Tailwind.
        </p>
        <br />
        <p className="text-gray-200 text-lg py-4 text-justify">
          I have done various projects for learning and also for my company. I
          listed all my personal works below, unfortunately I can't mention I
          will love if you go through it, cause I have dedicated so much to this
          websites. I am 5-star coder in problem-solving techniques and logic
          building on HackerRank. Also, one important thing Anime are not cartoons.
        </p>
      </div>
    </div>
  );
};

export default About;
