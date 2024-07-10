import { UilBookAlt } from "@iconscout/react-unicons";
import React from "react";
import {
  DiCodeigniter,
  DiGit,
  DiLaravel,
  DiMysql,
  DiReact,
} from "react-icons/di";
import CV from "../../assets/John-Cv.pdf";
import "./about.css";
import Card from "./card";
import Description from "./description";
import Profile from "./profile";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 desc-section ">
          <div class="col-md-6">
            <div class="mt-3 row justify-content-between gy-4">
              <div class="col-lg-5">
                <img
                  src="/img/heroImage.jpg"
                  className="img-fluid about-img"
                  style={{ borderRadius: "50px" }}
                  alt=""
                />
              </div>
              <div class="col-lg-7 about-info">
                <Profile
                  fullName="Fadhlur Rahman Aulia"
                  occasion="Fullstack Developer"
                  email="fadrahmangama@gmail.com"
                  phone="(62)85759046341"
                ></Profile>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="about_me">About me</h3>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              fugiat odit eos, qui repudiandae cum quos, quod officia asperiores
              tenetur at esse? Inventore, nobis iste aperiam minima repudiandae
              tenetur soluta.
            </Description>
            <a download href={CV} className="btn btn-dark mt-1 button-1">
              Download CV <UilBookAlt />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col md-12 skill">
            <h3 className="skill_title">Skills</h3>
            <div className="row">
              <Card title="Git">
                <DiGit className="icon" />
              </Card>
              <Card title="React">
                <DiReact className="icon" />
              </Card>
              <Card title="Laravel">
                <DiLaravel className="icon"></DiLaravel>
              </Card>
              <Card title="MySQL">
                <DiMysql className="icon"></DiMysql>
              </Card>
              <Card title="Firebase">
                <DiCodeigniter className="icon"></DiCodeigniter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
