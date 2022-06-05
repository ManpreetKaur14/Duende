// import React from 'react';
import React, {useState } from 'react';
import ReactPlayer from 'react-player';
import '../../App.css';
import { Link } from 'react-router-dom';
import apple from '../../images/applepay.png';
import google from '../../images/googlepay.png';
import './HeroSection.css';


function HeroSection() {
  const [click1, setClick1] = useState(false);
  const[click2,setClick2] =useState(false);
  
  const [state,setState] = useState({
    playing:true,
    muted:true
  })
  const {playing,muted} = state

  const handlePlayPause = ()=>{
    setState({ ...state, playing: !state.playing });
  };

  const handleMuteUnMute = ()=>{
    setState({ ...state, muted: !state.muted});
  };

  return (
    <div className='hero-container'>
      <div className='video-container'>
        <ReactPlayer 
        className='vdo'
        width="100%"
        height="100%"
        loop={true}
        url='/videos/introduction.mp4' 
        muted={muted} 
        playing={playing}
        />
    </div>
      <h1>What your nationality is,</h1>
      <div className='bottom-section'>
      <div className='hero-buttons'>
      <img className='downloadBtn' src={google} alt='Get It On Google Pay' />
      <img className='downloadBtn' src={apple} alt='Get It On Google Pay' />
      </div>
      <div className="play-pause-container" >
        <div className="play-pause-button" onClick={handlePlayPause}>
        <i className={playing ? 'fa-solid fa-pause': 'fa-solid fa-play'}
        />
        </div>
        <div className="mute-unmute-button" onClick={handleMuteUnMute}>
        <i className={muted ? 'fa-solid fa-volume-mute': 'fa-solid fa-volume-up'}
        />
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
