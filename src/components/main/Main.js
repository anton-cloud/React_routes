import React from "react";
import { MainStyled } from "./MainStyled";
import { mainRoutes } from "../../routes/mainRoutes";
import ContentSwitcher from "../contentSwitcher/ContentSwitcher";

const Main = () => {
  return (
    <MainStyled>
      <ContentSwitcher routes={mainRoutes} />
    </MainStyled>
  );
};

export default Main;
