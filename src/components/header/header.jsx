import {
  UilBriefcase,
  UilEstate,
  UilFile,
  UilLayers,
  UilMessage,
  UilUser,
} from "@iconscout/react-unicons";
import React from "react";
import "./header.css";
import HeaderList from "./headerList";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Fadhlur Rahman
        </a>
        <div className="nav_menu">
          <ul className="nav_list grid">
            <HeaderList link="#body">
              <UilEstate /> Home
            </HeaderList>
            <HeaderList link="#about">
              <UilUser /> About
            </HeaderList>
            <HeaderList link="#about">
              <UilFile /> Skills
            </HeaderList>
            <HeaderList link="#services">
              <UilBriefcase />
              Services
            </HeaderList>
            <HeaderList link="#portfolio">
              <UilLayers /> Portfolio
            </HeaderList>
            <HeaderList link="#contact">
              <UilMessage /> Contact
            </HeaderList>
          </ul>
          <i className="uil uil-times nav_close"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
