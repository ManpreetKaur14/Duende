import React from "react";
import  "../../styles/SignIn.css"
import logo from "../../images/logo.svg";
import ELFS from "../../images/ELFS.png";
const WelcomeSection = () => {
  return (
    <div className="left-section relative">
      <div>
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <h2 className="Signup-heading ">Hello Again!</h2>
        <p className="signup-subHeading">Welcome back you’ve been missed</p>
        <div>
          <img src={ELFS} alt="logo" className="welcome-img2" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
