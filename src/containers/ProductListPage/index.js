import React from "react";
import Layout from "../../components/Layout";
import { getParams } from "../../utils/getParams";
import ProductStore from "./ProductStore";
import ProductPage from "./ProductPage";
import "./style.css";

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
    let content = null;
    const params = getParams(props.location.search);
    console.log(params);
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = null;
    }

    return content;
  };

  return (
    <div>
      <Layout>
        {renderProduct()}
      </Layout>
    </div>
  );
};

export default ProductListPage;
