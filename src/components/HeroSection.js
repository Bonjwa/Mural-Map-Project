import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const scrollToBottom = () => window.scrollTo({
    top: 650,
    behavior: "smooth"
  });

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Kelowna Murals</h1>
      <p>This web app will guide you through the wonderful murals of Kelowna.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick = {scrollToBottom}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
