import React from 'react';
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import mongodb from "../Assets/mongodb.png";
import express from "../Assets/express.png";
import node from "../Assets/node.png";
import react from "../Assets/react.png";
import vscode from "../Assets/vscode.png"
import "./style.css"
const Skills = () => {
  return (
    <div className='skill-box' id="skills">
      <h1 className='skills-title'>💫 Skills</h1>
      <div className='skills-grid'>
      <div><img src={html} alt="bootstrap" /></div>
      <div><img src={css} alt="css3" /></div> 
      <div><img src={javascript} alt="git" /> </div>
      <div><img src={mongodb} alt="html5"/> </div>
      <div><img src={express} alt="javascript" /> </div>
      <div> <img src={node} alt="mongodb" /> </div>
      <div><img src={react} alt="nodejs" /></div>
      <div> <img src={vscode} alt="react"/> </div>
      </div>
 </div>
  );
}

export default Skills;
