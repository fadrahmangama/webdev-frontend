import { UilGithub, UilInstagram } from "@iconscout/react-unicons";
import React from "react";
const Self = () => {
  return (
    <div className="body_self">
      <a href="www.instagram.com" className="body_self-icon" target="_blank">
        <UilInstagram></UilInstagram>
      </a>
      <a href="www.github.com" className="body_self-icon" target="_blank">
        <UilGithub></UilGithub>
      </a>
    </div>
  );
};

export default Self;
