import React from 'react';

import "./style.css"
const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="home-container" id='home'>
    <h3 className="greeting">Hi There,</h3>
    <h1 className="name">
      I'm <span className="highlight">NIKHITHA K</span>
    </h1>
    <h2 className="role">I Am Into Fullstack Development</h2>
    <button className='arrow'onClick={scrollToAbout} >About Me &#9660; </button>
  </div>
  );
}

export default Home;
