import AdministrationPage from "../page/AdministrationPage";
import CartPAge from "../page/CartPage";
import HomePage from "../page/HomePage";
import ProductPage from "../page/ProductPage";

export const mainRoutes = [
  { name: "Home", path: "/", exact: true, component: HomePage},
  { name: "Products", path: "/products", exact: false, component: ProductPage},
  { name: "Administration", path: "/administration", exact: true, component: AdministrationPage },
  { name: "Cart", path: "/cart", exact: true, component: CartPAge },
];