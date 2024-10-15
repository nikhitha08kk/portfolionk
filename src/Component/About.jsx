import React from 'react';
import "./style.css"
import nikhitha from "../Assets/nikhitha.jpg"
import resume from "../Assets/resume.pdf"
const About = () => {
  return (
    <div className="about-container" id='about'>
      <h2 className="about-title">👨🏻‍💻 About Me</h2>
      <div className="image-container">
        <img src={nikhitha} alt="me" className="profile-image" />
      </div>
      <div className='about-me'>
        <h3 className='about-name'>Hi, I'm Nikhitha!</h3>
        <p className='about-name'>I graduated with a degree in Electronics and Communication Engineering from Arunachala College, Kanyakumari. During my academic journey, I developed a deep passion for technology, which led me to explore full-stack development. I had the incredible opportunity to intern at Softroniics, where I honed my skills in the MERN stack (MongoDB, Express, React, and Node.js).</p>
        <br></br>
     
       
      </div>
      <p className='mail-p'><a href='mailto:nikhithadeveloper@gmail.com' className='email-link'>📧 Email</a>:nikhithadeveloper@gmail.com</p>
     <button className='resume-button'> <a href={resume} className='resume-but' target="_blank" rel="noopener noreferrer">
        Resume
      </a></button>
    </div>
  );
}

export default About;
