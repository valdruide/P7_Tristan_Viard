import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
      return (
            <div className="navigation">
                  <div className="logo">
                        <a href="/"><img src="../LOGO.svg" alt="Logo Kasa" className="logoImg" /></a>
                  </div>
                  <ul>
                        <NavLink to="/" className={(nav) => (nav.isActive ? 'navActive' : '')}>
                              <li>Accueil</li>
                        </NavLink>
                        <NavLink to="/About" className={(nav) => (nav.isActive ? 'navActive' : '')}>
                              <li>A propos</li>
                        </NavLink>
                  </ul>
            </div>
      );
};

export default Navigation;
