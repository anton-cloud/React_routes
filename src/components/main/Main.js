import React, { Component } from "react";
import { productRouters } from "../../routes/productRouters";
import Navigation from "../Navigation/Navigation";
import { MainStyled } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../page/HomePage";
import { mainRoutes } from "../../routes/mainRoutes";
import { __RouterContext } from "react-router";

class Main extends Component {
  state = {};
  render() {
    return (
      <MainStyled>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))}
          {/* <Route path="/" component={HomePage} exact /> */}
          {/* <Route path="/product" component={ProductPage} />
          <Route path="/administration" component={AdministrationPage} />
          <Route path="/cart" component={CartPage} /> */}
        </Switch>
      </MainStyled>
    );
  }
}

export default Main;
