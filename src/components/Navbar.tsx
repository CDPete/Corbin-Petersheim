import React, { useState } from 'react';
import { Link } from 'react-scroll'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";


interface Props {
  faColor?: "#ffffff" | "#4EC0E9";
}

const Navbar = ({faColor}: Props) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    
    
    //   <button type="button" className="burger"><FontAwesomeIcon icon={faBars} size="lg" style={{color: "#ffffff",}}/></button>
<>

  <header>

  
    <nav className="horizontal-header">
      <Link activeClass="active" spy={true} smooth={true} duration={500} to='page1'>Home</Link>
    </nav>
    
    <nav className="horizontal-header" >
      <Link activeClass="active" spy={true} smooth={true} duration={500} to='page2'>About</Link>
      <Link activeClass="active" spy={true} smooth={true} duration={500} to='page3'>Skills</Link>
      <Link activeClass="active" spy={true} smooth={true} duration={500} to='page4'>Projects</Link>
      <Link activeClass="active" spy={true} smooth={true} duration={500} to='page5'>Contact</Link>
    </nav>
    

    <input type="checkbox" className="toggler"/>
    <div className="burger"><div></div></div>
    <nav className="vertical-header">
      <Link activeClass="none" spy={true} smooth={true} duration={500} to='page1'>Home</Link>
      <Link activeClass="none" spy={true} smooth={true} duration={500} to='page2'>About</Link>
      <Link activeClass="none" spy={true} smooth={true} duration={500} to='page3'>Skills</Link>
      <Link activeClass="none" spy={true} smooth={true} duration={500} to='page4'>Projects</Link>
      <Link activeClass="none" spy={true} smooth={true} duration={500} to='page5'>Contact</Link>
    </nav>

  </header>







</>
  );
};

export default Navbar;
