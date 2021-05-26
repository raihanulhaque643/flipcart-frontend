import React, { useEffect } from "react";
import { getProductPage } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getParams } from "../../../utils/getParams";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);

  return (
    <div style={{ margin: "0px 10px" }}>
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => {
            return (
              <a
                style={{ display: "block" }}
                href={banner.navigateTo}
                key={index}
              >
                <img
                  src={banner.img}
                  alt=""
                  style={{ objectFit: "cover", height: "500px", width: "100%" }}
                />
              </a>
            );
          })}
      </Carousel>
      <div className="" style={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap', margin: '10px 0'}}>
        {page.products &&
          page.products.map((product, index) => {
            return (
              <Card key={index}
                style=
                {{
                  width: "400px",
                  height: "200px",
                  margin: "10px"
                }}>
                <img
                  style={{
                    width: "100%",
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src={product.img}
                  alt=""
                />
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
