import AdministrationPage from "../page/AdministrationPage";
import AuthPage from "../page/AuthPage";
import CartPAge from "../page/CartPage";
import HomePage from "../page/HomePage";
import ProductPage from "../page/ProductPage";
import ProfilePage from "../page/ProfilePage";

export const mainRoutes = [
  { name: "Home", path: "/", exact: true, component: HomePage},
  { name: "Products", path: "/products", exact: false, component: ProductPage},
  { name: "Administration", path: "/administration", exact: true, component: AdministrationPage },
  { name: "Profile", path: "/profile", exact: true, component: ProfilePage },
  { name: "Auth", path: "/auth", exact: true, component: AuthPage },
  { name: "Cart", path: "/cart", exact: true, component: CartPAge },
];