import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiMysql
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/114709734/265724514-58f88974-d437-4b76-8232-8ce8fed63529.jpg"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>JobNest</h2>
                <p>
                Job tracking website with advanced search and filtering, Google OAuth authentication, JWT authorization, and enhanced user engagement through animations, progress bars, and an event calendar.
                </p>
                <div>
                  <SiMongodb />
                  <SiExpress />
                  <FaReact />
                  <SiNodedotjs />
                  
                  
                </div>
                <div>
                  {/* <a
                    href="https://store-rockstargames.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/VatsalDoshi/JobNest"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/114709734/263542467-6449f3a4-ecd7-4ddc-99e5-332b72f757ca.png"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  The Weather App provides real-time weather updates based on your current location, and allows users to search for weather conditions in different cities or pinpoint locations on a map for tailored weather information.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  {/* <a
                    href="https://sk-weather-app.netlify.app/weather-app.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/VatsalDoshi/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://user-images.githubusercontent.com/114709734/265750014-ea67d95f-ab40-449c-b7f1-5b6d238d911a.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Mini Projects</h2>
                <p>
                Developed a diverse portfolio of mini-projects, including a JavaScript-based Tic-Tac-Toe game, two versions of a Reminder App (one in JavaScript, another in React.js), a CRUD API for the Reminder App tested in Postman, an Apartment Finder website, and a calculator utilizing the JavaScript Canvas API.
                </p>
                <div>
                  <SiMongodb />
                  <SiExpress />
                  <FaReact />
                  <SiNodedotjs />
                  <IoLogoJavascript />
                  
                </div>
                <div>
                  {/* <a
                    href="https://www.npmjs.com/package/apijs-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View NPM Package
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/VatsalDoshi/mini-projects-web-development"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>DropBox Clone -Backend</h2>
                <p>
                  Backend API for a google drive like app built using NodeJS,
                  Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                  operations for users, files and folders.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  {/* <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/VatsalDoshi/Backend-System"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container world_bank" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/114709734/265758994-7bce3e5b-7d9f-4653-be2f-e6ad7293a3bb.png"
                    alt="Banking site"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>World Bank</h2>
                <p>
                Developed a dynamic Banking System website with a frontend in HTML and CSS, backend in PHP, and SQL database, featuring functionalities for 10 dummy customers to transfer money and view transaction history.
                </p>
                <div>
                  
                  <SiHtml5 />
                  <DiCss3 />
                  <SiMysql />
                  <SiPhp />
                </div>
                <div>
                  {/* <a
                    href="https://github.com/VatsalDoshi/Banking-System"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/114709734/265773552-6eb509b3-b0ed-472e-913b-215751771c2b.png"
                    alt="Flipkart-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Flipkart Clone</h2>
                <p>
                  Flipkart is an E-commerce web application, known for offering a wide range of products from electronics and fashion to home goods.
                  
                </p>
                <div>
                  <SiMongodb />
                  <SiExpress />
                  <FaReact />
                  <SiNodedotjs />
                </div>
                <div>
                  {/* <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/VatsalDoshi/Flipkart-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
