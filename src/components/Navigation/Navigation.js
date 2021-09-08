import React from "react";
import { NavigationStyled } from "./NavigationStyled";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes }) => {
  return (
    <NavigationStyled>
      <ul className="navigationList">
        {routes.map((route) => (
          <li className="navigationItem" key={route.name}>
            <NavLink
              className="navigationLink"
              activeClassName="navigationLinkActive"
              to={route.path}
              exact={route.exact}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
