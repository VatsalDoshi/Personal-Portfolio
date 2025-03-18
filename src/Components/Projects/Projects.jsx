import React from "react";
import "./Projects.css";
import { FaJava ,FaVuejs ,FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiTypescript,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPython ,
  SiPostgresql,
  SiSwift ,
  SiMysql
} from "react-icons/si";
// import { RiFirebaseFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

          {/* Video Chatbot */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/47360648-aac3-41ba-867e-0f95c8b3ec8a"
                    alt="Video Chatbot"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Video Chatbot</h2>
                <p>
                AI-powered video navigation platform with intuitive video uploads, interactive playback, and precise timestamp-based search functionality, enhanced with real-time chat capabilities for improved user engagement.</p>
                <div>
                <SiNextdotjs />
                  <FaReact />
                  <SiTypescript />
                  <SiTailwindcss />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/AI-Powered-Video-Navigation"
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

          {/* JobPortal using Vue */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/VatsalDoshi/jobPortal-using-Vue/blob/main/image-1.png?raw=true"
                    alt="JobPortal-using-Vue"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>JobPortal using Vue</h2>
                <p>
                Job listings portal built with Vue.js 3, Vite, and JSON Server, featuring seamless CRUD operations, dynamic routing with Vue Router, responsive Tailwind CSS design, and toast notifications for enhanced user feedback.</p>
                <div>
                  <SiMongodb />
                  <SiExpress />
                  <FaVuejs />
                  <SiNodedotjs />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/jobPortal-using-Vue"
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

          {/* AI Dashboard */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/82346382-3357-42c4-a750-5d5cfbfc02e9"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>AI Dashboard</h2>
                <p>
                Dashboard application for managing posts and images with real‐time AI chatbot interactions, secure authentication via Clerk, seamless file uploads using UploadThing, and robust error monitoring with Sentry—all built using Next.js, TypeScript, Tailwind CSS, and Drizzle ORM.</p>
                <div>
                <SiNextdotjs />
                  <FaReact />
                  <SiTypescript />
                  <SiTailwindcss />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/AI-Dashboard"
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


          

          {/* Twitter Database Model */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/8d10ce31-edf5-435d-bde2-35a038434c45"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Twitter Database Model</h2>
                <p>
                Twitter sentiment analysis platform with real-time tweet ingestion via Tweepy, accelerated ETL using Azure Data Factory, and dynamic Power BI dashboards for actionable marketing insights.</p>
                <div>
                <SiPython />
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/Twitter-Database-Model"
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

          {/* Django Banking System */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/53ec8861-5c18-47d2-98c3-b13e6a90b7e5"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Django Banking System</h2>
                <p>
                Banking application with comprehensive financial features, robust user authentication and advanced KYC verifications, and real-time notifications to enhance user engagement and ensure zero-downtime deployment.</p>
                <div>
                <SiPython />

                  <SiPostgresql />
                  <FaReact />

                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/VelocityVault"
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

          {/* Web Automation */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/c686f13c-0e39-4d54-a422-009d373aee29"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Web Automation</h2>
                <p>
                NEU portal automation with Selenium scripts for academic records access and task management, Agile/SAFe-driven CI/CD integration, and data-driven QA reporting via custom HTML dashboards.</p>
                <div>
                <FaJava />

                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/NEU-Symphony-Automation"
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

          {/* Meal Mate */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/b2dcfdc2-55ff-4f6f-9944-e3b6a1ae34f4"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Meal Mate</h2>
                <p>
                Meal Mate mobile app with personalized recipe curation, advanced filtering through TheMealDB API, and robust scalability using clean architecture, MVVM, Swift generics, and protocol-oriented programming.</p>
                <div>
                <SiSwift />
                {/* <RiFirebaseFill /> */}
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/MealMate"
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

          {/* Campus Connect */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/45914d0f-d5f6-486b-a914-ccf01cbe7cf8"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Campus Connect</h2>
                <p>
                Campus Connect is an app that provides real-time event updates and facility status tracking, robust local caching via SQLite, and seamless asynchronous data management using Combine.</p>
                <div>
                <SiSwift />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/CampusConnect"
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

          {/* Campus Navigation */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/264eb86b-7b07-4cfa-a3a9-313ad264b582"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Campus Navigation</h2>
                <p>
                A campus navigation app featuring custom geospatial algorithms, real‑time 3D route visualization, advanced department search, dynamic routing and landmark detection using Firebase, and enhanced offline support through CoreData.</p>
                <div>
                <SiSwift />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/VatsalDoshi/NavCampus"
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

          {/* Enterprise Management System */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://github.com/user-attachments/assets/531129d2-4ca7-4041-930c-04d6f55c3814"
                    alt="Jobnest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Enterprise Management System</h2>
                <p>
                Enterprise management system with real‐time work request tracking (ordered, pending, complete, canceled), rigorous data validation for secure admin CRUD operations, and an intuitive Java Swing UI that enhances user interaction and team collaboration.</p>
                <div>
                  <FaJava />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/SamikshaMundas16/AED_INFO_5100_SVB"
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


{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

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
                  <a
                    href="https://github.com/VatsalDoshi/Banking-System"
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
                  <a
                    // href="https://github.com/VatsalDoshi/Backend-System"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Upcoming Project
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
                  <a
                    // href="https://github.com/VatsalDoshi/Flipkart-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Upcoming Project
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
