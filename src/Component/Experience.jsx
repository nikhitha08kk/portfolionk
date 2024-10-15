import React from 'react';
import './style.css';  // Link to the CSS file

const Experience = () => {
  return (
    <div className='experience' id='experience'>
      <h1>Experience</h1>
      <div className='softronics'>
        <p>SOFTRONIICS, Calicut
          <br />
          ❖ Mern Stack Developer: Internship 09/23 - Present
          <br />
          1. Developed and deployed interactive and responsive web applications using React.js, enhancing user experience and engagement.
          <br />
          2. Utilized Node.js and Express.js to build robust server-side applications, implementing efficient routes and middleware for seamless backend functionality.
        </p>
      </div>
      <div className='proplus'>
        <p>PROPLUS LOGICS, Coimbatore
          <br />
          ❖ Web Designer: Internship for 1 month - 2022
          <br />
          1. Trained in HTML, CSS, and Bootstrap framework and created a webpage.
        </p>
      </div>
    </div>
  );
}

export default Experience;
