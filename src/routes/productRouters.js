import Cars from "../components/products/Cars";
import Tools from "../components/products/Tools";
import Toys from "../components/products/Toys";

export const productRouters = [
  { name: "Tools", path: "/tools", exact: true, component: Tools },
  { name: "Toys", path: "/toys", exact: true, component: Toys },
  { name: "Cars", path: "/cars", exact: true, component: Cars },
];
