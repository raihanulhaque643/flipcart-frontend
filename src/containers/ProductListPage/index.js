import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";

const ProductListPage = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug))
    }, []);

  return (
    <div>
      <Layout>product list page</Layout>
    </div>
  );
};

export default ProductListPage;
