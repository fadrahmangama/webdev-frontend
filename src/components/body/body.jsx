import React from "react";
import "./body.css";
import Data from "./data";
import Self from "./self";
const Body = () => {
  return (
    <>
      <section className="body section" id="body">
        <div className="body_container container grid">
          <div className="body_content grid">
            <Self></Self>
            <div className="body_img"></div>
            <Data fullname="I am Fadhlur Rahman" occasion="Student & Developer">
              Currently undergraduate student who likes to learn and develop
              website. Want to know more about me ? hit me up down below!
            </Data>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
