import React from "react";
import ContentSwitcher from "../components/contentSwitcher/ContentSwitcher";
import Navigation from "../components/navigation/Navigation";
import { productRouters } from "../routes/productRouters";

const ProductPage = ({ match }) => {
  return (
    <>
      <Navigation routes={productRouters} url={match.url} />
      <ContentSwitcher routes={productRouters} path={match.path} />
    </>
  );
};

export default ProductPage;
