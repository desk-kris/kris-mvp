import React from "react";
import { Link } from "react-router-dom";

const NaviBar = () => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <span className="nav-link active">
            <Link to="/admin">Admin</Link>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/userview">Projects</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NaviBar;
/* 
        <div>
            <ul className="nav-items">
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </div> 
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
        */
