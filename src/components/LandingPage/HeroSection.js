// import React from 'react';
import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import { Link } from "react-router-dom";
import apple from "../../images/applepay.png";
import google from "../../images/googlepay.png";
import linkedin from "../../images/linkedIn_icon.svg"
import discord from "../../images/discord_icon.svg"
import tiktok from "../../images/tikTok_icon.svg"
import twitter from "../../images/twitter_icon.svg"
import instagram from "../../images/instagram_icon.svg"
import youTube from "../../images/youTube_icon.svg"
import "./HeroSection.css";

function HeroSection() {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);

  const [state, setState] = useState({
    playing: true,
    muted: true,
  });
  const { playing, muted } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleMuteUnMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  return (

    
    <main className="mt-5 mb-5">
        <div className="container">
        <div className="hero-container">
        <ReactPlayer
          className="vdo"
          width="100%"
          height="100vh"
          loop={true}
          url="/videos/introduction.mp4"
          muted={muted}
          playing={playing}
        />
          <h1>What your nationality is,</h1>
          <div className="bottom-section">
        <div className="hero-buttons">
          <a href={ "https://play.google.com/store/apps/details?id=com.Duende.Duende" } target="_blank">
          <img
            className="downloadBtn"
            src={google}
            alt="Get It On Google Pay"
          />
          </a>
          <img className="downloadBtn" src={apple} alt="Get It On Google Pay" />

          <div className="hero-social-icons">
          <div className="hs_icon">
          <a href={ "https://www.linkedin.com/company/duende4world/" } target="_blank">
          <img src={linkedin} alt="linkedin-icon"/>
          </a>
          </div>
          <div className="hs_icon">
          <a href={ "https://discord.com/invite/hkJ62P2uCz" } target="_blank">
          <img src={discord} alt="discord-icon"/>
          </a>
          </div>
          <div className="hs_icon">
          <a href={ "https://tiktok.com/@duende4world" } target="_blank">
          <img src={tiktok} alt="tiktok-icon" />
          </a>
          </div>
          <div className="hs_icon">
          <a href={ "https://twitter.com/duende4world" } target="_blank">
          <img src={twitter} alt="twitter-icon"/>
          </a>
          </div>
          <div className="hs_icon">
          <a href={ "https://www.instagram.com/duende4world/" } target="_blank">
          <img src={instagram} alt="instagram-icon"/>
          </a>
          </div>
          <div className="hs_icon">
          <a href={ "https://www.youtube.com/channel/UCNiWc8tG8ZRpMjXNlpBXRYg" } target="_blank">
          <img src={youTube} alt="youTube-icon"/>
          </a>
          </div>
          </div>
        </div>
        <div className="play-pause-container">
          <div className="play-pause-button" onClick={handlePlayPause}>
            <i className={playing ? "fa-solid fa-pause" : "fa-solid fa-play"} />
          </div>
          <div className="mute-unmute-button" onClick={handleMuteUnMute}>
            <i
              className={
                muted ? "fa-solid fa-volume-mute" : "fa-solid fa-volume-up"
              }
            />
          </div>
        </div>
      </div>
        </div>
        </div>
        </main>
  );
}

export default HeroSection;
