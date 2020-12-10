import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="links">
      <Link className="to-home" to="/">This Way To Homepage</Link>
      {/* <Link to="/Details"></Link> */}
      </div>
    </nav>
      
  );
};

export default Nav;