import React from "react";
import SignInForm from "./SignInForm";
import  "../../styles/SignIn.css"
import WelcomeSection from "../SignIn/WelcomeSection";

const SignIn = () => {
  return (
    <div className="inner-container">
      <WelcomeSection />
      <SignInForm />
    </div>
  );
};

export default SignIn;
