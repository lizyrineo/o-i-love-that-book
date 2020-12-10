import React from 'react';
import './Header.css';
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="header-o">O!</h1><h2 className="header-title">I Love That Book!</h2>
        
        <Nav />
      </header>  
    </div>
  );
};

export default Header;