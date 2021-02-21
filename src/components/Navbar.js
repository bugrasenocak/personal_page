import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar-component">
          <Link to="#" className="menu-bar-components">
            <FaIcons.FaArrowRight
              onClick={showSidebar}
              className="menu-bars-icon m-4 display-6"
            />
          </Link>
        </div>
        <nav
          className={
            sidebar ? "nav-menu-component active" : "nav-menu-component"
          }
        >
          <ul className="nav-menu-items-component" onClick={showSidebar}>
            <li className="navbar-toggle-component">
              <Link to="#" className="menu-bars p-4">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text-component m-4">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQED8-Zfdolqvg/profile-displayphoto-shrink_400_400/0/1600546323730?e=1619049600&v=beta&t=vn2jkFJuFyuhZCXbR9FJNxrmbxL_vYUD_goOyIE1Mmk"
                className="img-fluid rounded-circle"
                style={{ width: "100px" }}
              />
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
