import React ,{useState} from 'react';

import logo from "../Assets/logo.png"
import "./style.css"
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
  return (
    <header className='header'>
       <div className='logo'>
        <img src={logo} className="logo-nav" alt='logo-img' />
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <>&#x2715;</> : <>&#9776;</>} {/* Hamburger (&#9776;) and close (&#x2715;) icons */}
        </button>
        <div className='nav-home'>
        <nav className={isMobile ? 'nav-links-mobile' : 'nav-links'} >
          <a href="#home" className='nav-menu'  onClick={() => setIsMobile(false)} >Home</a>
          <a href="#about" className='nav-menu' onClick={() => setIsMobile(false)}>About</a>
          <a href="#skills" className='nav-menu' onClick={() => setIsMobile(false)}>Skills</a>
          <a href="#education" className='nav-menu'  onClick={() => setIsMobile(false)}>Education</a>
          <a href="#projects" className='nav-menu' onClick={() => setIsMobile(false)}>Projects</a>
          <a href="#experience" className='nav-menu' onClick={() => setIsMobile(false)}>Experience</a>
          <a href="#contact"className='nav-menu'  onClick={() => setIsMobile(false)}>Contact</a>
        </nav>
        </div>
    
      </div>

    </header>
  );
}

export default Header;
