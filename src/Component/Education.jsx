import React from 'react';
import ddu from "../Assets/ddu.jpg";
import college from "../Assets/college.jpg"
const Education = () => {
  return (
    <div className='education-box' id='education'>
    <h1>🎓 Education</h1> 
    <p className='quotes'>“Education is the most powerful weapon which you can use to change the world.” - A. P. J. Abdul Kalam</p>
    <div>
      <img src={ddu} alt='ddu-img'></img>
      <h2>Engineer Trainee Course</h2>
      <p>DDU-GKY-Study World College Of Engineering , Coimbatore</p>
      <h2>2022</h2>
    </div>
    <div>
      <img src={college} alt='college-img'></img>
      <h2>Electronics And Communication Engineering</h2>
      <p>ACEW, Nagercoil</p>
      <h2>2017-2021</h2>
    </div>
  </div>

  );
}

export default Education;
