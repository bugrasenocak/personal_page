import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text-component",
  },
  {
    title: "About",
    path: "/about",
    icon: <SiIcons.SiAboutDotMe />,
    cName: "nav-text-component",
  },
  {
    title: "Social",
    path: "/social",
    icon: <FaIcons.FaUserPlus />,
    cName: "nav-text-component",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaIcons.FaGithubAlt />,
    cName: "nav-text-component",
  },
  {
    title: "Twitter",
    path: "/twitter",
    icon: <FaIcons.FaTwitter />,
    cName: "nav-text-component",
  },
];
