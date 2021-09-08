import React, { Component } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../Navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <HeaderStyled>
          <Navigation routes={mainRoutes}/>
        </HeaderStyled>
      </>
    );
  }
}

export default Header;
