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
            I am currently pursuing a Master's in Business Analytics at Northeastern University, with a Bachelor's in 
            Management Studies focused on Marketing. As a former risk analyst, I've analyzed data in finance, real estate, 
            and consumer markets. I've also interned in marketing and business consulting, gaining experience in 
            campaigns, creative ideation, and government interactions. Alongside my academic and professional pursuits, 
            I've earned awards in film production, developed leadership skills in sports, and gained proficiency in 
            programming. I aspire to leverage my analytics and strategic thinking skills in consulting roles to drive 
            impactful solutions in the business world.
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
