import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">portfolio
          <ul className="nav-projects">
            <NavLink to="/Couple" activeClassName="nav-active" className="hover">
              <li>Couple</li>
            </NavLink>
            <NavLink to="/Bapteme" activeClassName="nav-active" className="hover">
              <li>Bapteme</li>
            </NavLink>
            <NavLink to="/Mariage" activeClassName="nav-active" className="hover">
              <li>Mariage</li>
            </NavLink>
            <NavLink to="/Grosesse" activeClassName="nav-active" className="hover">
              <li>Grosesse</li>
            </NavLink>
            <NavLink to="/Bebe" activeClassName="nav-active" className="hover">
              <li>Bebe</li>
            </NavLink>
         
          </ul>
        </li>

        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>contact</li>
        </NavLink>
        <NavLink to="/prestations" activeClassName="nav-active" className="hover">
              <li>Tarifs</li>
            </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
