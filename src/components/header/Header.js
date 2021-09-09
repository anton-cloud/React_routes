import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";
import { withRouter } from 'react-router-dom'

const Header = ({location}) => {
  return (
          <>
        <HeaderStyled>
        <Navigation routes={mainRoutes} prevPathName={location.pathname}/>
        </HeaderStyled>
      </>
  );
}

export default withRouter(Header);