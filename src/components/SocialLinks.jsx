import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      title: "LinkedIn",
      item: (
        <>
          <FaLinkedin size={24} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      title: "Github",
      item: (
        <>
          <FaGithub size={24} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      title: "Hacherrank",
      item: (
        <>
          <SiHackerrank size={24} />
        </>
      ),
      href: "https://www.hackerrank.com/shubhamtayade007?hr_r=1",
    },
    {
      id: 4,
      title: "Mail",
      item: (
        <>
          <HiOutlineMail size={24} />
        </>
      ),
      href: "mailto:shubhamtayade11235@gmail.com",
    },
    {
      id: 5,
      title: "Resume",
      item: (
        <>
          <BsFillPersonLinesFill size={24} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <>
      <div className="hidden lg:flex lg:flex-col top-[31%] left-0 fixed">
        <ul>
          {links.map(({ id, item, title, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300 " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noopener noreferrer"
                download={download}
              >
                {title} {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-black text-center text-white mt-4 fixed bottom-0 w-full h-min lg:hidden">
        <div className="container px-8 pt-1 mx-auto">
          <div className="flex justify-between w-full">
            {links.map(({ id, item, href, download }) => (
              <a
                key={id}
                href={href}
                type="button"
                className="uppercase my-4 leading-normal text-white transition duration-300 ease-in-out hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                download={download}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
