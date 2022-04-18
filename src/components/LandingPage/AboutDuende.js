import React from 'react'
import './AboutDuende.css'
import pic from '../images/pic1.svg'
function About()
{
  return(
   <div className='about-container'>
      <div className='left-section'>
          <h1 className='about-heading'>About Duende</h1>
          <p className='about-description'>
            We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.
            We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. 
            Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.
            </p>
      </div>
      <div className='right-section'>
        <img src={pic} alt='logo' className='about-image'/>
      </div>
 
     </div>
  );
}

export default About;
