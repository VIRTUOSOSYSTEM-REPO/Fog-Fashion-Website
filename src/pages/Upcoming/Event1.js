import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";

import "./Event.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/Event1Data";
import { FaInstagram } from "react-icons/fa";

function Event1() {
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles((t) => ({
    home: {
      color: theme.secondary,
      position: "absolute",
      top: 15,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>Fog Fashion Studio | KIDS FASHION</title>
      </Helmet>
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>FOG FASHION</h1>
      </div>
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body index">
          <div className="about-description">
            <h2 style={{ color: theme.fogYellow }}>
              𝐊𝐈𝐃𝐒 𝐅𝐀𝐒𝐇𝐈𝐎𝐍 𝐑𝐔𝐍𝐖𝐀𝐘{" "}
              <span style={{ color: theme.header }}>EDITIO𝐍 3 </span>
            </h2>
            <p style={{ color: theme.tertiary80 }}>
              {aboutData.description}
              <br />
              <br />
              {aboutData.description1}
            </p>
          </div>
          <div className=" index">
            <a
              href={
                "https://www.instamojo.com/@fogfashionstudio/l6d7f86c39a16427e9ae2388c70581a0c/"
              }
              rel="im-checkout"
              data-text="Pay"
              data-css-style="color:#ffffff; background:#75c26a; width:300px; border-radius:4px"
              data-description="KIDS FASHION RUNWAY EDITION 3 HAPPENING AT BANGALORE"
              data-layout="vertical"
            >
              <button
                class="button"
                href={
                  "https://www.instamojo.com/@fogfashionstudio/l6d7f86c39a16427e9ae2388c70581a0c/"
                }
              >
                <span>Register </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event1;
