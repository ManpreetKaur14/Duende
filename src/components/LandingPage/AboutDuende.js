import React from "react";
import "./AboutDuende.css"
import pic from '../../images/Dashboard.png'
import AboutHeader from "../../components/FaqPage/AboutHeader";
import styles from "../../styles/TermsPage.module.css";
import "../../styles/TermsPage.module.css"


function About() {
  return (
    <>
      <AboutHeader />
      <main>
        <div className="container">
          <div className={styles.terms_page_holder}>
          {/* <h1 className="about_heading">
          Lets know about Duende
          </h1>
          <div className="content">
          <p className="about_content">
            We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.
            We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. 
            Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.
            We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.
            We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. 
            Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.
          </p>
          <div className='right-section'>
          <img src={pic} alt='logo' className='about-image'/>
          </div>
          </div> */}
           <div className='about-container'>
      <div className='about-left'>
          <h1 className='about_heading'>About Duende</h1>
          <p className='about-description'>
            We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.
            We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. 
            Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.
            </p>
      </div>
      <div className='about-right'>
        <img src={pic} alt='logo' className='about-image'/>
      </div>
 
     </div>
          </div>
        </div>
      </main>
    </>
  );
}
            
export default About;
