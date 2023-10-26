import React, { useEffect } from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {

  // useEffect(() => {
  //   // Add CSS for Calendly
  //   const link = document.createElement("link");
  //   link.rel = "stylesheet";
  //   link.href = "https://assets.calendly.com/assets/external/widget.css";
  //   document.head.appendChild(link);

  //   // Add script for Calendly
  //   const script = document.createElement("script");
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   script.async = true;
  //   script.onload = () => {
  //     window.Calendly.initBadgeWidget({
  //       url: 'https://calendly.com/vatsal-doshi/30min',
  //       text: 'Schedule time with me',
  //       color: '#0069ff',
  //       textColor: '#ffffff',
  //       branding: false,
  //     });
  //   };
  //   document.body.appendChild(script);
  // }, []);

  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Vatsal Doshi</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and innovative Full Stack Developer with expertise in the MERN Stack. Adaptable to a wide range of tools and technologies, and always eager to acquire new skills. Experienced in database technologies, with a track record of successfully delivering over 10 projects in the past 3 years.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/VatsalDoshi"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:doshi.va@northeastern.edu"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+18578916633"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/vatsal-v-doshi/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/10aB6-KTGZAMlibVj42yqu312XYXKRe6J/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
