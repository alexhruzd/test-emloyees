import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/employees">
            Сотрудники
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
