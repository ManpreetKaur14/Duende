// import React from 'react';
import React, {useState } from 'react';
// import Video from 'react';
import '../../App.css';
import apple from '../images/applepay.png';
import google from '../images/googlepay.png';

import './HeroSection.css';


function HeroSection() {
  const [click1, setClick1] = useState(false);
  const[click2,setClick2] =useState(false);
  const handleClick1 = () => setClick1(!click1);
  const handleClick2 = () => setClick2(!click2);
    

  return (
    <div className='hero-container'>
      <div className='video-container'>
    <video src='/videos/introduction.mp4' autoPlay loop muted/>
    </div>
      <h1>What your nationality is,</h1>
      <div className='bottom-section'>
      <div className='hero-buttons'>
      <img className='downloadBtn' src={google} alt='Get It On Google Pay' />
      <img className='downloadBtn' src={apple} alt='Get It On Google Pay' />
      </div>
      <div className="play-pause-container" >
        <div className="play-pause-button" onClick={handleClick1}>
        <i className={click1 ? 'fa-solid fa-play': 'fa-solid fa-pause'}
        />
        </div>
        <div className="mute-unmute-button" onClick={handleClick2}>
        <i className={click2 ? 'fa-solid fa-volume-up': 'fa-solid fa-volume-mute'}
        />
        </div>

    
      {/* <i className={click1 ? 'fa-solid fa-play': 'fa-solid fa-pause'} onClick={() => { handleClick1();}}/> 
      <i className={click2 ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high'} onClick={() => { handleClick2();}}/>  */}
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
