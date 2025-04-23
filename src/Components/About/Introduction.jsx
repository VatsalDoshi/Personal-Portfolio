import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">


            {/* 
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Vatsal Doshi </span> and I am pursing my{" "}
                <span className="different">
                  {" "}
                  Masters of Science in Information Systems
                </span>

                &nbsp;from{" "}
                <span className="different">Northeastern University </span>


                . I have completed my Bachelor of Engineering
                from{" "}
                <span className="different">
                  University Of Mumbai
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
            
            */}

            <h4>
            Hey there! I have Graduated from Northeastern University with a Master of Science in Information Systems. Along the way, I've delved into crafting user-friendly apps, designing databases, and enhancing web experiences, armed with Python, Java, R, SQL, HTML/CSS, Bootstrap, ReactJS, NodeJS, and more. Beyond the books, I've whipped up Twitter bots, cooked a hotel management system, and even tinkered with smart road maintenance through machine learning and IoT. I'm an enthusiastic techie excited to add a dash of skill and spark to a dynamic team!
            </h4>
              



            {/* 
            
            <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4>
            
            */}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
