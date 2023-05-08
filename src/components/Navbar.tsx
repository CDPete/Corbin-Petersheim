import React, { useState } from 'react';


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

  
  <input type="checkbox" className="toggler"/>
  <div className="burger"><div></div></div>

    <a onMouseEnter={() => faColor= "#4EC0E9"} onMouseLeave={() => faColor= "#ffffff" } className="lower horizontal-header" href='#'>
      <FontAwesomeIcon icon={faHouseChimney} size="lg" style={{color: faColor,}} />
    </a>

 
    
    
    <nav className="horizontal-header" >
      <a href='#'>About</a>
      <a href='#'>Skills</a>
      <a href='#'>Projects</a>
      <a href='#'>Contact</a>
    </nav>

    <nav className="vertical-header">
      <a href='#'>About</a>
      <a href='#'>About</a>
      <a href='#'>Skills</a>
      <a href='#'>Projects</a>
      <a href='#'>Contact</a>
      <a href='#'>Miscellaneous</a>
    </nav>

  </header>







</>
  );
};

export default Navbar;
